
## 0. 创建企业微信群机器人


![wechat-setup](/img/wechat-setup.png)

## 1. 配置 emqx_guard_pro

- 在 EMQX 的 etc 目录下创建一个 wechat.conf 文件。
- 添加以下配置：

```json
wechat {  
  enable = true
  webhook = "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=your-webhook-key"
  at_mobiles = ""
}
```
## 2. 加载配置
```bash
./bin/emqx_ctl guard load ./etc/wechat.conf
loaded wechat ok
```
## 3. 测试通知
```bash
./bin/emqx_ctl guard test
```
![wechat-test-notification](/img/wechat-test-notification.png)

## 4. 常见问题
- 如果无法收到测试通知，请第一时间检查 EMQX 日志。
- 确保你的企业微信群机器人 webhook 地址正确，推荐[使用官方的 curl 样例测试通知](https://developer.work.weixin.qq.com/document/path/99110)。

## 5. 参考资料
- [如何使用企业微信群机器人](https://developer.work.weixin.qq.com/document/path/91770)
