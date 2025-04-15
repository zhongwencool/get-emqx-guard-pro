---
title: 🛠️ Changed Configuration
description: Get real-time alerts for configuration changes with emqx_guard_pro
---

# Real-Time Configuration Change Alerts: Your EMQX Guardian

emqx_guard_pro continuously monitors EMQX configuration changes,
providing real-time alerts when configuration changes occur.
In the world of MQTT, even small changes can have big impacts.
emqx_guard_pro acts like a security camera for your configuration,
ensuring that any changes are immediately detected and addressed.

Most of EMQX configuration support hot updates,
allowing modifications through the dashboard or command line without system downtime.
For example, you can change MQTT Settings directly in the dashboard:

![mqtt-setting](/img/mqtt_setting_dashboard.png)

This user-friendly interface is doing some behind-the-scenes magic.
It's equivalent to modifying your `etc/emqx.conf` file like this:

```json
mqtt {
  max_packet_size = "10MB"
  max_topic_levels = 20
}
```

emqx_guard_pro captures every configuration change and provides real-time notifications for these changes.
This ensures that administrators are immediately aware of any changes happening in the system.


![mqtt-settting-email](/img/mqtt_setting_email.png "From Email Notification")


Ready to upgrade your EMQX management experience?
Dive into and [take control of your configuration changes today!](/docs/EMQX-Guard-Pro/Configuration/Gmail)