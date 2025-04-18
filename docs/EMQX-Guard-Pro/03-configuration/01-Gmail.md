---
title: Gmail 
description: Configuration guide for using Gmail with emqx_guard_pro
---
## 0. Prerequisites
  [Enable 2-Step Verification for your Google account](https://support.google.com/accounts/answer/185839) if you haven't already.

## 1. Create an app password
[Create an App Password](https://support.google.com/accounts/answer/185833?hl=en):
   - Go to your Google Account settings
   - Select "Security"
   - Under "Signing in to Google," select "App Passwords"
   - Generate a new app password for emqx_guard_pro
![gmail-app-password](/img/gmail-app-password.png "Gmail App Password")

## 2. Copy Gmail SMTP configuration

```json
> more smtp.conf
smtp {
  enable = true
  auth = if_available  
  from_address = "your@gmail.com"
  host = "smtp.gmail.com:465"
  password = "The app password you generated"
  skip_verify = true
  to_address = "xxx@gmail.com ,yyy@gmail.com"
  user = "your@gmail.com"
}

```
## 3. Load the configuration

```bash
./bin/emqx ctl guard load ./smtp.conf
loaded smtp ok
```
## 4. Test the notification

```bash
./bin/emqx ctl guard test
```
![gmail-test-notification](/img/gmail-test-notification.png "Gmail Test Notification")

## 5. Common issues
If you don't receive the test message and find no errors in the EMQX log, verify:
- `user` and `from_email` are full Gmail addresses (@gmail.com)
- `password` is the generated app password
- `skip_verify = true`
- `host = "smtp.gmail.com:465"` (not port 587)

## 6. Reference
- [Gmail SMTP](https://support.google.com/mail/answer/7126229?hl=en)
- [Gmail App Password](https://support.google.com/mail/answer/185833?hl=en)


