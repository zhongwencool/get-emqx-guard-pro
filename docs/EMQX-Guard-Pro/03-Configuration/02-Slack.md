---
title: Slack 
description: Configuration guide for using Slack with emqx_guard_pro
---
## 0. Prerequisites

- A Slack account
- Access to a Slack workspace where you have permissions to add apps

## 1. Create a new Slack App
1. Go to the [Slack API website](https://api.slack.com/apps).
2. Click on "Create New App" in the top right corner.
3. Choose "From scratch" when prompted.
4. Give your app a name and select the workspace where you want to develop it.
5. Click "Create App" to proceed.

## 2. Set up bot token scopes
1. In the left sidebar, click on "OAuth & Permissions".
2. Scroll down to the "Scopes" section.
3. Under "Bot Token Scopes", click "Add an OAuth Scope".
4. Add scope: `chat:write`, which allows your bot to send messages.
5. Add scope: `channels:read`, which allows your bot to read messages from channels.

![slack-token](/img/slack-token.png "Slack Token")
![slack-scope](/img/slack-scope.png "Slack Scope")

## 3. Install the app to your workspace
1. Scroll up to the "OAuth Tokens for Your Workspace" section.
2. Click "Install to Workspace".
3. Review the permissions and click "Allow" to install the app.
4. You'll be redirected back to the "OAuth & Permissions" page. Here, you'll see your "Bot User OAuth Token". Save this token securely, as you'll need it to authenticate your app.

## 4. Get Slack channel ID
![slack-channel-id](/img/slack-channel-id.png "Slack Channel ID")

## 5. Configure emqx_guard_pro Plugin
```shell
./bin/emqx ctl guard slack > slack.conf
vim slack.conf
```
```json
slack {
  enable = true
  %% View channel details from slack app Step 4
  channel = C070C2D15V4
  %% Start with `xoxb-`
  token = "xoxb-6008313801830-7511264685218-9WIB2JGQdgL5zDUcv1OZ4kIy"
  %% If you configure the channel, webhook is useless.
  webhook = "https://hooks.slack.com/services/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"
}
```
```shell
./bin/emqx ctl guard load ./slack.conf
loaded slack ok
```
## 6. Test the notification
```shell
./bin/emqx ctl guard test 
```
![slack-notification](/img/slack-send-channel-message.png "Slack Notification")

## 7. Common issues

If you don't receive the test message, check the EMQX log. 
A "not_in_channel" error indicates the bot hasn't joined the channel and can't send messages. 
It is recommended to reinstall the app to the workspace.

```
2024-09-13T07:08:31.679838+00:00 [warning] tag: guard_pro, 
msg: send_slack_channel_failed, 
reason: #{<<"error">> => <<"not_in_channel">>,
<<"ok">> => false,
<<"response_metadata">> => #{<<"warnings">> => [<<"missing_charset">>]},
<<"warning">> => <<"missing_charset">>}
```

## 8. Reference
- [Slack API](https://api.slack.com/apis/connections/chat-api)
- [Slack Bot Token](https://api.slack.com/authentication/token-types#bot)
- [Slack Bot Token Scopes](https://api.slack.com/scopes)
