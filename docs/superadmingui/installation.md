---
sidebar_position: 2
id: installation
title: Installation & Integrations
description: How to install SuperAdminGUI and configure supported integrations on your Paper server.
---

# Installation & Integrations

Follow this quick guide to install and configure SuperAdminGUI on your Minecraft server.

---

## Quick Start Setup

### 1. Download
Download the latest release jar (`SuperAdminGUI-1.0.0.jar`) from your authorized download source or [Modrinth](https://modrinth.com/user/Kykoxen).

### 2. Install
Place the `.jar` inside your server's plugins directory:
```text
plugins/SuperAdminGUI-1.0.0.jar
```

### 3. Install Supported Integrations (Optional)
Install any external plugins you want SuperAdminGUI to integrate with:
* **LuckPerms** — Group management & role hierarchy
* **Vault** — Economy balances and controls
* **AdvancedBan** — Punishment and ban management
* **ExcellentEconomy** — Florin multi-currency management
* **SuperVanish / PremiumVanish** — Staff vanish mode
* **EssentialsX** — Fallback vanish & server utilities
* **PlaceholderAPI** — External placeholders in menus and messages

### 4. Start Your Server
Start or reload your server to generate configuration files:
```bash
plugins/SuperAdminGUI/
  ├── config.yml
  ├── modules.yml
  ├── gui.yml
  ├── roles.yml
  ├── messages.yml
  └── jails.yml
```

### 5. Configure Permissions
Grant your staff the base dashboard permission:
```bash
/lp group mod permission set superadmingui.use true
```
*(Or configure granular roles through `roles.yml`).*

### 6. Open the Dashboard
In-game or in console, execute:
```text
/superadmingui
```
Aliases: `/sag`, `/admin`, `/staffgui`

---

## Supported Integrations Overview

| Plugin | Purpose in SuperAdminGUI |
| :--- | :--- |
| **AdvancedBan** | Handles punishment execution (ban, mute, warn, kick) and historical logs. |
| **LuckPerms** | Provides group inspection, group setting, and hierarchy defense. |
| **Vault** | Inspects, modifies, and resets player currency balances with safety caps. |
| **ExcellentEconomy** | Native support for Florin economy transactions. |
| **SuperVanish / PremiumVanish** | Full invisibility integration; falls back to native Paper player hiding if omitted. |
| **EssentialsX** | Vanish fallback and player utility compatibility. |
| **PlaceholderAPI** | Enables `%vault_eco_balance%`, `%player_ping%`, and custom placeholders. |
