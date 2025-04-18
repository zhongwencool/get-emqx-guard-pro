## 0. 在飞书群组中创建机器人
根据飞书官方文档[在群组中创建机器人](https://www.feishu.cn/hc/zh-CN/articles/360024984973-%E5%9C%A8%E7%BE%A4%E7%BB%84%E4%B8%AD%E4%BD%BF%E7%94%A8%E6%9C%BA%E5%99%A8%E4%BA%BA)

## 1. 获取飞书机器人 Webhook 和 Secret

![feishu-webhook-secret](/img/feishu-webhook-secret.png)

## 2. 加载飞书消息卡片模板
- 打开[飞书卡片搭建工具](https://open.feishu.cn/cardkit)
- 导入卡片，从这里下载[feishu-card-template.card](https://github.com/zhongwencool/get-emqx-guard-pro/blob/main/feishu-card-template.card)。
 ![feishu-card-import](/img/feishu-card-import.png)
 - 发布卡片，默认发布时会指定版本为`1.0.0`
 ![feishu-card-publish](/img/feishu-card-publish.png)
 - 绑定卡片到webhook，填写上一步骤获取到的webhook，或者直接选择所有自定义机器人。
 ![feishu-card-bind](/img/feishu-card-bind.png)
 - 复制卡片 id
![feishu-card-id](/img/feishu-card-id.png)

## 3. 配置 emqx_guard_pro
在 EMQX 的 etc 目录下创建一个 feishu.conf 文件。
```json
feishu {
  enable = true
  // 如果不想使用 secret 验证（换用 IP 白名单），得保证 secret=""
  secret = "Your Webhook Secret"  
  template_id = "Your Template ID"  
  template_version_name = "1.0.0"
  webhook = "Your Webhook URL"
}
```
## 4. 加载配置
```bash
./bin/emqx_ctl guard load ./etc/feishu.conf
loaded feishu ok
```

## 5. 测试通知
```bash
./bin/emqx_ctl guard test
```
![feishu-test-notification](/img/feishu-test-notification.png)

## 6. 常见问题
- 如果无法收到测试通知，请第一时间检查 EMQX 日志。
- 请确保在步骤 5 中收到了 4 条信息。如果只收到 3 条，
丢失了 Alarm 信息，请检查 EMQX 的日志，如果提示模板没找到，则是模板可能只是导入了但是没有**发布成功**。

## 7. 参考资料
- [添加自定义机器人](https://open.feishu.cn/document/client-docs/bot-v3/add-custom-bot)
- [飞书卡片搭建工具](https://open.feishu.cn/cardkit)
