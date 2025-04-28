---
title: 📊 Connection Congestion Trace
description: Monitor and manage MQTT client message rates in EMQX
---

# Connection Congestion Trace

## Understanding Client Message Rate Limits

:::info Official EMQX Documentation
The EMQX or MQTT protocols do not directly limit the rate at which each client can receive messages. However, when too many messages are received and cannot be processed by the client in time, the messages may get heaped up and eventually discarded. To ensure system stability and message reliability, it is recommended that each client subscribe to receive messages at a rate of no more than 1500 messages/second (1KB per message).

If the message receive rate exceeds this recommendation, you can use Shared Subscription to add multiple subscribers to spread the load and reduce the rate of messages received by a single subscriber.
:::

*From [Is there a limit to the message receive rate for EMQX clients?](https://docs.emqx.com/en/emqx/latest/faq/feature.html#is-there-a-limit-to-the-message-receive-rate-for-emqx-clients)*


## Consequences of High Receive Rates

If a client consistently receives messages above its processing capacity, you may observe the following issues:

### Mailbox Overflow Errors

Logs may show warnings like `check_oom_shutdown` with reason `mailbox_overflow`, indicating the client's queue limit was exceeded, leading to disconnection:

```
[warning] clientid: sub-client1, msg: check_oom_shutdown, mfa: emqx_connection:check_oom/3(1137), 
peername: 172.100.239.1:62110, username: admin, shutdown: #{max => 1000,reason => mailbox_overflow,value => 1211}, 
incoming_bytes: 2856, incoming_pubs: 168, policy: #{max_heap_size => 4194304,enable => true,max_mailbox_size => 1000}
```

Error logs may also appear:
```
[error] supervisor: {esockd_connection_sup,<0.45294.0>}, errorContext: connection_shutdown, 
reason: #{max => 1000,reason => mailbox_overflow,value => 1211}, 
offender: [{pid,<0.45294.0>},{name,connection},{mfargs,{emqx_connection,start_link,[#{listener => {tcp,default},
limiter => #{connection => #{initial => 0,burst => 0,rate => infinity}},enable_authn => true,zone => default}]}}]
```

### Reconnect Loops

If the client is configured with `clean session = false`, upon reconnecting, it might immediately receive a large backlog of queued messages. This can instantly overload it again, causing another disconnection and potentially creating a persistent reconnect loop.

### Connection Congestion Alarms

The broker might raise `conn_congestion` alarms for the affected client:

```
connection congested: #{memory => 42760,message_queue_len => 0,pid => <<"<0.124008359.0>">>,
reductions => 35678,send_pend => 14573,peername => <<"172.31.2.162:58258">>,
sockname => <<"172.31.43.242:1883">>,buffer => 4096,high_msgq_watermark => 8192,
high_watermark => 1048576,recbuf => 235416,sndbuf => 332800,recv_cnt => 6,
recv_oct => 341,send_cnt => 51,send_oct => 674407,username => <<"appuser">>,
clientid => <<"APP_00000018774">>,conn_state => connected,connected_at => 1744752271372,
proto_name => <<"MQTT">>,proto_ver => 4,socktype => tcp}
```

## Solution: Shared Subscriptions

To effectively handle high-throughput topics without overloading individual clients, use Shared Subscriptions. This feature allows multiple clients to subscribe to the same topic pattern under a shared group name. EMQX then distributes the incoming messages among the clients in the group (e.g., round-robin), significantly reducing the message rate each individual client needs to handle.

## Proactive Monitoring: Identifying High-Load Clients

It's crucial to identify clients potentially experiencing high message rates before they cause problems. Monitoring individual client send and receive rates helps determine if Shared Subscriptions are needed for certain topics.

### EMQX Guard Pro Trace Tool

EMQX Guard Pro provides the `emqx_ctl guard trace` command-line utility for real-time client monitoring:

```bash
./bin/emqx_ctl guard trace
```

This will display a live-updating table of connected clients and their key metrics:

![recv_rate](/img/trace_top_recv_rate.png)

### Key Metrics to Monitor

- **SendRate (msg/s)**: Rate at which EMQX is sending messages to the client. Crucial for identifying overloaded subscribers.
- **ReceiveRate (msg/s)**: Rate at which EMQX is receiving messages published by the client.
- **DropSend (msg/s)**: Rate at which EMQX is dropping messages destined for this client (often due to Mailboxlen limits being hit). Indicates subscriber overload.
- **DropRecv (msg/s)**: Rate at which EMQX is dropping messages received from this client.
- **Mailboxlen**: The current number of messages queued in the client's mailbox on the broker. High values indicate the client is falling behind.
- **Reduction**: A measure of the client process's activity or busy-ness. Higher values mean the process is busier.
- **Connected**: Timestamp when the client connected.
- **Disconnected**: Timestamp when the client disconnected (relevant if tracking persistent sessions).
- **Pid**: The client's internal process ID within EMQX.

### Interacting with the Tool

- **Sorting**: You can sort the list interactively. For example, type `sr` and press `Enter` to sort by `SendRate` (descending), quickly highlighting clients receiving the most messages.
  
  ![send_rate](/img/trace_top_send_rate.png)
  
- **Exiting**: Type `q` and press `Enter` to quit the tool.

## Additional Metrics

The tool also displays general system information:

- **Load Average**: Operating system load average.
- **Connections**: Total current client connections.
- **Topics**: Total unique subscribed topics across all clients.
- **Retained**: Number of retained messages stored by the broker.
- **Delayed**: Number of messages currently scheduled for delayed publishing.
- **Cluster Session**: Number of sessions managed across the cluster.
- **transformation_*_rate / validation_*_rate**: Metrics related to the success/failure rates of EMQX's Rule Engine message transformations and schema validations.

By monitoring these metrics, especially SendRate, DropSend, and Mailboxlen for individual clients using emqx_ctl guard trace, you can proactively identify potential bottlenecks and implement Shared Subscriptions where necessary to maintain a stable and reliable MQTT service.
