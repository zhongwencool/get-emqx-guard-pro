---
title: 🔍 Potential Problem Detection
description: Proactive detection of system issues that could affect EMQX performance
---

# Potential Problem Detection

EMQX Guard Pro continuously monitors your system for potential issues that could affect the performance and stability of your EMQX cluster. By detecting these problems early, you can address them before they impact your production environment.

## System Time Synchronization

### The Problem

When the system time on your host machine differs significantly from the Erlang VM's internal time, it can cause various scheduling and timing issues. This commonly happens when:

- Your machine goes to sleep for an extended period (especially in containerized environments)
- Time synchronization services are not properly configured
- Virtual machines experience time drift

### What Guard Pro Does

Guard Pro monitors the difference between the OS system time and the Erlang VM's system time. If the difference exceeds 30 seconds, it will:

1. Send a notification with details about the time discrepancy
2. Include both timestamps and the difference between them
3. Automatically suppress repeated notifications for the same issue

:::note
A single time discrepancy notification is usually not a concern as the system automatically corrects itself. However, if you receive this notification repeatedly, it indicates a persistent issue with your system's time synchronization that should be addressed.
:::

### Recommended Action

If you receive repeated time synchronization warnings:

- Ensure NTP (Network Time Protocol) is properly configured on your host system
- Avoid allowing machines running EMQX to enter sleep states in production environments
- For containerized deployments, ensure proper time synchronization between the host and containers

## Retained Message Monitoring

### The Problem

MQTT's retained message feature allows the broker to store the last message published to each topic. While useful, having too many retained messages can:

- Consume excessive memory
- Slow down broker operations
- Increase the time it takes new clients to receive all their subscribed topics' retained messages

### What Guard Pro Does

Guard Pro monitors the number of retained messages stored in the EMQX broker. If the count exceeds 100,000 messages, it will send a notification alerting you to the high number of retained messages.

### Recommended Action

If you receive a notification about too many retained messages:

- Review your application's use of retained messages
- Consider implementing a retention policy to automatically clean up old retained messages
- Use the EMQX Dashboard or CLI to manually clean up unnecessary retained messages
- Consider using alternative patterns like Last Will and Testament (LWT) messages where appropriate

## Swap Memory Usage

### The Problem

Erlang applications like EMQX are designed to manage memory within the Erlang VM. When the system starts using swap memory:

- It can introduce unpredictable latency as memory pages are swapped in and out
- The Erlang VM's memory management becomes less effective
- Overall system performance can degrade significantly

### What Guard Pro Does

Guard Pro monitors the system's swap memory usage. If more than 128MB of swap memory is being used, it will send a notification with details about:

- Total swap memory available
- Free swap memory
- Amount of swap memory currently in use

### Recommended Action

If you receive a notification about swap memory usage:

- Increase the physical RAM available to the system
- Adjust the system's swappiness parameter to reduce the likelihood of using swap
- Review the EMQX memory settings to ensure they're appropriate for your hardware
- Check for other processes that might be consuming excessive memory

## Configuration

No additional configuration is required for the potential problem detection feature. It runs automatically as part of EMQX Guard Pro's monitoring system.

## Notification Example

When a potential problem is detected, you'll receive a notification through your configured notification channels with details about the specific issue:

![potential-problem-notification](/img/potential_problem_notification.png)

By addressing these issues promptly, you can maintain optimal performance and reliability of your EMQX deployment.
