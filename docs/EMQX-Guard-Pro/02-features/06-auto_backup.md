---
title: 💾 Auto Backup
description: Automatic scheduled backups of your EMQX cluster
---

# Auto Backup

The EMQX Guard Pro automatically backs up your EMQX cluster's essential data and configurations on a regular schedule. This helps you recover your setup easily in case of unexpected issues.

It simplifies the backup process by automating creation and cleanup, ensuring you always have recent recovery points without manual intervention.

## Features

- **Scheduled Backups**: Automatically creates backups based on a configured schedule.
- **Automatic Cleanup**: Keeps only the latest 5 backup files, automatically deleting older ones to save space.
- **Simple Restore**: Backups can be easily restored using the standard `emqx_ctl data import` command.

## Configuration
To view the current backup schedule configuration:

```bash
emqx_ctl guard backup_cron
```
```yaml
backup_cron = "0 12 * * 0"
```

To change the backup schedule configuration:

```bash
emqx_ctl guard backup_cron '0 1 * * 0'
```

The `backup_cron` setting defines the schedule for automatic backups using a Cron expression:

- **Format**: A standard Cron string: Minute Hour DayOfMonth Month DayOfWeek.
- **Default Value**: `0 12 * * 0`
- **Default Meaning**: The backup runs automatically every Sunday at 12:00 PM (noon).
- **Example**: To run a backup every day at 2:30 AM, set it to `30 2 * * *`.

Backup files are typically stored in a default EMQX `data/backup` directory (the specific path depends on your EMQX installation). The files will likely have names indicating the timestamp, e.g., `export-2025-04-24-02-40-36.364.tar.gz`.

![backup-email](/img/backup-email.png)

## Restoring from a Backup

To restore your EMQX node's data and configuration from a backup file:

1. Identify the backup file you want to restore (e.g., `emqx-export-2025-04-24-02-40-36.364.tar.gz`).
2. Use the following EMQX control command, replacing the filename with your actual backup file:

```bash
emqx_ctl data import emqx-export-2025-04-24-02-40-36.364.tar.gz
```
Example output:
```bash
Importing data from "data/backup/emqx-export-2025-04-24-02-40-36.364.tar.gz"...
Importing cluster configuration...
Importing built-in database...
Importing emqx_acl database table...
Importing emqx_authn_scram_mnesia database table...
Importing emqx_authn_mnesia database table...
Importing emqx_banned database table...
Importing emqx_banned_rules database table...
Importing emqx_retainer_message database table...
Starting reindexing retained messages
Reindexed 9527 messages
Reindexing retained messages finished
Importing emqx_admin database table...
Importing emqx_app database table...
Importing emqx_psk database table...
Data has been imported successfully.
```

## Important Notes on Restoring

- Restoring using `emqx_ctl data import` only restores core data and configuration.
- It does **NOT** change the node's name (e.g., `emqx@127.0.0.1`) or cluster-related configurations (like the cluster discovery method or seed nodes).
- This design prevents accidentally breaking cluster membership or node identity when restoring data to an existing node.
- If you need to rebuild a cluster with specific node names, you'll need to configure those settings manually before the data restore.
- It does **NOT** restore all plugins' code and settings.
