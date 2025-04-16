---
title: 🧩 Inconsistent Configuration
description: how EMQX maintains configuration consistency within a cluster and how to resolve inconsistencies.
---
# Inconsistent Configuration Notification
EMQX tries to keep all nodes in a cluster configured the same way.
Sometimes, inconsistencies can occur for reasons beyond control.
For example, one node might connect to a webhook while another can't.
This can lead to ongoing problems with updates on the node that failed to connect.

emqx_guard_pro keeps an eye on these inconsistencies and sends alerts.
This helps you spot which settings are different across all cluster nodes.

![inconsistent-configuration-email](/img/inconsistent_email.png)

## How To Fix ?
If you receive a notification about inconsistent configurations, follow these steps to investigate and resolve the issue:

### 1. Check Cluster Configuration Synchronization Status

First, verify the current synchronization status of your EMQX cluster configuration using the following command on any of your EMQX nodes:

```bash
./bin/emqx_ctl conf cluster_sync status
```
This command will provide information about the synchronization status across all nodes in the cluster.

### 2. Initiate Configuration Synchronization
If the status indicates inconsistencies, you can attempt to synchronize the configuration from the node with the most comprehensive configuration to the other nodes in the cluster. Execute the following command on any node:

```
./bin/emqx_ctl conf cluster_sync fix
```
By following these steps, you can effectively identify and resolve configuration inconsistencies within your EMQX cluster, ensuring a stable and reliable MQTT messaging platform.
### 3. Verify Synchronization
After running the synchronization command, check the synchronization status again to confirm that all nodes are now consistent. Use the same command as in step 1:

```bash
./bin/emqx_ctl conf cluster_sync status
```
If the status shows that all nodes are now synchronized, the issue has been resolved.
If inconsistencies persist, you may need to investigate further to identify the root cause of the discrepancies.

:::tip
This `conf cluster_sync fix` command is available in EMQX v5.8 and later.
:::
