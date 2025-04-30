# EMQX Guard Pro Documentation

This repository contains the documentation website for EMQX Guard Pro, the professional monitoring and alerting solution for EMQX clusters. The website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Documentation Structure

The documentation is organized into the following main sections:

### 📚 Introduction
- Overview of EMQX Guard Pro and its capabilities
- Key features and benefits
- Common use cases and problems it solves

### 🔧 Installation
- Step-by-step installation guide
- System requirements
- Configuration basics

### ✨ Features

#### Monitoring and Alerting
- **🔔 Alarm Notification**: Real-time alerts for critical EMQX events
- **🛠️ Changed Configuration**: Track configuration changes in your EMQX cluster
- **🚨 Risk Configuration**: Proactive security alerts for EMQX configuration risks
- **🔄 Duplicated Configuration**: Detect and resolve duplicate configurations
- **🧩 Inconsistent Configuration**: Identify inconsistencies across cluster nodes
- **💾 Auto Backup**: Automatic scheduled backups of your EMQX cluster
- **📊 Connection Congestion Trace**: Monitor and manage MQTT client message rates
- **🔍 Potential Problem Detection**: Proactive detection of system issues affecting performance

### ⚙️ Configuration
- **Gmail**: Configure email notifications via Gmail
- **Slack**: Configure Slack notifications
- **QQMail**: Configure QQ Mail notifications
- **WeChat**: Configure WeChat notifications
- **Feishu**: Configure Feishu notifications
- **DingTalk**: Configure DingTalk notifications

## Development

### Installation

```bash
$ yarn
```

### Local Development

```bash
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```bash
$ USE_SSH=true yarn deploy
```

Not using SSH:

```bash
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
