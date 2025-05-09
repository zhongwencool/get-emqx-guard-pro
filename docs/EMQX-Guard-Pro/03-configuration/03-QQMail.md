## 0. 生成 QQ 邮箱授权码

- 登录到你的 QQ 邮箱账户。
- 点击"设置" > "账户"。
- 在"POP3/IMAP/SMTP/Exchange/CardDAV/CalDAV服务"部分，开启"POP3/SMTP服务"。
- 系统会要求你生成授权码。这个授权码将用作你的 SMTP 密码。
![qqmail-code](/img/qqmail-code.png "QQ Mail Code")
![qqmail-code-2](/img/qqmail-code-2.png "QQ Mail Code 2")

## 1. 配置 emqx_guard_pro

- 在 EMQX 的 etc 目录下创建一个 smtp.conf 文件。
- 添加以下配置：

```json
smtp {
  auth = if_available
  enable = true
  from_address = "your_qq_email@qq.com"
  host = "smtp.qq.com:465"
  password = "your_smtp_code"
  skip_verify = true
  to_address = "xx@gmail.com,yy@qq.com"
  user = "your_qq_email@qq.com"
}
```

## 2. 加载配置

```bash
./bin/emqx ctl guard load ./etc/smtp.conf
loaded smtp ok
```

## 3. 测试通知

```bash
./bin/emqx ctl guard test
```

![qqmail-test-notification](/img/qqmail-test-notification.png "QQ Mail Test Notification")

## 4. 常见问题
- 出于安全原因，QQ 邮箱要求使用授权码而不是你的常规密码来设置 SMTP。确保你使用的是授权码，而不是你的邮箱密码。
- 确定端口是 465，而不是 587。
- 确保你的邮箱地址是你的完整 QQ 邮箱地址，比如： `your_qq_email@qq.com` 。
- 如果仍然无法收到通知，请检查你的防火墙和安全软件，确保它们没有阻止 EMQX 访问 SMTP 服务器。

## 5. 参考资料

- [如何打开POP3/SMTP/IMAP功能？](https://service.mail.qq.com/detail/128/428?expand=14)
- [什么是授权码，它又是如何设置？](https://service.mail.qq.com/detail/128/75?expand=14)

