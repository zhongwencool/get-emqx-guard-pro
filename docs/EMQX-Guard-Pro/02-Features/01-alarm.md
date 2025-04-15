---
title: 🔔 Alarm Notification
description: Get real-time alarm notifications with emqx_guard_pro
---
# Alarms
EMQX provides a wide range of [Alarms](https://docs.emqx.com/en/emqx/latest/observability/alarms.html) information. 
 In the open-source version, users can get alarm notifications by subscribing to system topics through the MQTT Protocol. To receive real-time alarm notifications, you’ll need to create an MQTT client to subscribe to these system topics. 

:::tip
With the release of EMQX v5.8, alarm information is no longer visible on the dashboard in the open-source version.
This change makes emqx_guard_pro even more valuable for receiving real-time alarm alerts.
:::

emqx_guard_pro greatly enhances and broadens the alarm features by:
- Allowing real-time notifications to various platforms
- Providing easy configuration that doesn’t require any coding
- Introducing additional new alarm types

If you have suggestions for more useful alarm types, don’t hesitate to open an [ISSUE](https://github.com/zhongwencool/get-emqx_guard_pro/issues).

Here are some examples of alarm notifications you might receive via email:

![emqx_guard_pro Alarm Types](/img/alarm-types.png)

## Reference

- [EMQX Alarms Document](https://docs.emqx.com/en/emqx/latest/observability/alarms.html)

