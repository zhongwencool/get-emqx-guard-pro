---
title: 🚨 Risk Configuration
description: Proactive Security Alerts for EMQX Configuration Risks
---

# Risk Configuration Notification

emqx_guard_pro actively scans your configuration settings upon startup to identify potential security risks. This notification provides a heads-up about any concerning configurations that require your attention to ensure a secure and stable MQTT broker environment.

Here are the key areas emqx_guard_pro monitors:

## 🍪 Default Cookie Alert:
    
**Risk**: Using the default cookie with publicly exposed EMQX internal ports is like leaving your house key under the doormat, potentially allowing unauthorized access.

**emqx_guard_pro Warning**: This alert indicates that you are using the default cookie, and your EMQX internal ports might be accessible from the public internet, which could lead to malicious connections.
![default-cookie](/img/default_cookie.png)

**How to Fix**:

To enhance security, it is crucial to change the default cookie. You can configure a unique cookie value in your EMQX configuration file (e.g., emqx.conf or base.conf). Look for the node.cookie setting. Replace the default value with a strong, randomly generated string.

**Example Configuration**:
```
node.cookie = "your_strong_and_unique_cookie_value"
```
For detailed instructions, please refer to the EMQX Documentation on Node Configuration.

## 🔐 Authentication Check:

**Risk**: Disabling authentication is like having an exclusive club with no bouncer, allowing anyone to enter. Without authentication, any device can connect to your EMQX broker.

**emqx_guard_pro Warning**: This alert indicates that authentication is currently turned off, leaving your EMQX broker vulnerable to unauthorized connections.
![risk-authn](/img/risk_authn.png)

**How to Fix**:

Enable authentication to ensure only authorized devices can connect to your EMQX broker. EMQX supports various authentication methods. Choose a suitable method (e.g., username/password, JWT) and configure it in your EMQX settings.

**Example Configuration (Basic Username/Password Authentication)**:

Enable the built-in authentication (if not already enabled).
Configure user credentials (username and password).
Refer to the EMQX Documentation on **Authentication** for detailed configuration steps for different authentication methods.

## 📝 Log Level Optimization:
**Risk**: Setting the log level too low can lead to excessive logging, similar to a security camera recording every minute detail 24/7. This can negatively impact performance due to increased disk I/O and storage consumption.

**emqx_guard_pro Guidance**: This indicates that your current log level might be set too low, potentially causing performance issues due to excessive logging.

![risk-log](/img/risk_log.png)

How to Fix:

Adjust your log level to an appropriate setting that balances the need for detailed logging with system performance. Consider using levels like `warning, error, or critical` for production environments.

Example Configuration (in emqx.conf or base.conf):
```
log.file.level = warning
```
Consult the EMQX Documentation on Logging Configuration for more information on available log levels and their implications.

## 🖥️ Dashboard Security:

**Risk**: Using the default password for your admin dashboard is like using "password123" for your email, making it easy for attackers to gain unauthorized access to your EMQX management interface.

**emqx_guard_pro Reminder**: This alert reminds you that you are currently using the default password for the EMQX dashboard admin account, which poses a significant security risk.

![risk-dashboard](/img/risk_dashboard.png)

**How to Fix**:

Immediately change the default administrator password for the EMQX dashboard. You can usually do this through the dashboard interface itself or via the command-line interface. Choose a strong, unique password that is difficult to guess.

**Steps to Change Password (via Dashboard)**:

1. Log in to the EMQX dashboard using the default credentials.
2. Navigate to the user management section (e.g., "Access Control" or "Users").
3. Locate the admin user and change the password.
Refer to the EMQX Documentation on Dashboard Management for detailed instructions.

## ⛓️ Authorization Source Checks:

**Risk**: Incorrectly configured authorization sources can lead to either completely open access or a complete lockout of clients.

**emqx_guard_pro Analysis**: This check examines your authorization settings:

- Empty authorization.sources with no_match = allow: This is like leaving your front door wide open. Any client could potentially connect to EMQX without any authorization checks.
- Empty authorization.sources with no_match = deny: This is like locking everyone out. No clients would be able to connect to EMQX as there are no defined authorization sources.

![risk-authz](/img/risk_authz.png)

**How to Fix**:

Configure your authorization.sources according to your security requirements. Define the sources from which EMQX should fetch authorization rules (e.g., built-in database, external HTTP API, LDAP). Set the no_match policy appropriately based on your desired behavior when no matching authorization rule is found.

Example Configuration (using built-in database in emqx.conf or base.conf):
```
authorization.sources = builtin
authorization.no_match = deny
```

Consult the EMQX Documentation on Authorization for comprehensive details on configuring authorization sources and policies.

We are continuously expanding our security checks to cover even more aspects of your MQTT broker environment. Stay tuned for future updates that will further enhance your system's safety and      performance.