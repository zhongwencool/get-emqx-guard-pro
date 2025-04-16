## 0. 创建钉钉机器人
根据 [钉钉的自定义机器人接入配置文档](https://open.dingtalk.com/document/robots/custom-robot-access)，创建一个自定义机器人。

![dingtalk-setup](/img/dingtalk-setup.png)
![dingtalk-secret](/img/dingtalk-secret.png)

## 1. 配置 emqx_guard_pro
在 EMQX 的 etc 目录下创建一个 dingtalk.conf 文件。


```json
dingtalk {
  at_mobiles = ""
  enable = true
  secret = "SECd03600bdc77cc59da73ac6af38f58ba2a6c01c76e6e821503db15e7d4821ac06"
  webhook = "https://oapi.dingtalk.com/robot/send?access_token=your-access-token"
}
```

## 2. 加载配置
```bash
./bin/emqx_ctl guard load ./etc/dingtalk.conf
loaded dingtalk ok
```

## 3. 测试通知
```bash
./bin/emqx_ctl guard test
```
![dingtalk-test-notification](/img/dingtalk-test-notification.png)
