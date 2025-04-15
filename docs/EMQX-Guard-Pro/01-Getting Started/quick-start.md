# Quick Start

## What is emqx_guard_pro ?

emqx_guard_pro is a smart monitoring plugin designed for EMQX MQTT clusters, built on the [EMQX plugin framework](https://docs.emqx.com/en/emqx/latest/extensions/plugins.html). It makes cluster monitoring a breeze, providing a smooth and hassle-free experience for developers, operations teams, and IoT engineers alike.

## Installation

### Download via GitHub Releases
To get started with emqx_guard_pro, simply download the latest version from the
[the GitHub releases page](https://github.com/zhongwencool/get-emqx_guard_pro/releases).

```bash
curl -L -o emqx_guard_pro-1.1.0.tar.gz https://github.com/zhongwencool/get-emqx_guard_pro/releases/download/1.0.0/emqx_guard_pro-1.1.0.tar.gz
```
- Explanation: This command fetches version 1.1.0 and saves it as emqx_guard_pro-1.1.0.tar.gz. Feel free to replace 1.1.0 with the version you need.
- Supported Systems: Compatible with Linux, macOS, and Windows (using WSL or similar).

### Install via Dashboard

Head over to "Management ⏩️ Plugins" in the EMQX Dashboard.
![install-plugin](/img/install-plugin.png)

:::tip
If you’re using EMQX version v5.8.6 or higher, run this command from the command line:
```
 emqx_ctl plugins allow emqx_guard_pro-1.1.0.tar.gz
```
:::

![activate-plugin](/img/activate-plugin.png)
![running-plugin](/img/running-plugin.png)

:::tip
Make sure to keep emqx_guard_pro updated to the latest version—no need to restart EMQX! 🚀

[Join our Discord community to stay updated with the latest news and announcements. 💬](https://discord.gg/d6mEs9VzUc)
:::

## Next Steps 

Once you’ve installed it, tap into the full potential of emqx_guard_pro:

- Learn how to monitor cluster health and set up alerts.
- Set up notifications in seconds to stay informed.

These sections guide you through advanced features and integration with your systems.

- [Explore Features →](/docs/features/alarm)
- [Configure Notification →](/docs/configuration/gmail)
