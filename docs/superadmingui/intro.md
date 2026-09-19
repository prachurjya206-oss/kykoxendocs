---
sidebar_position: 1
id: intro
title: Overview & Features
description: Overview, architecture, and core features of SuperAdminGUI for Minecraft Paper/Purpur servers.
---

# SuperAdminGUI

### The Ultimate Lightweight Staff Management Suite

> **SuperAdminGUI** is a modular, high-performance staff operations and player management GUI built for modern **Paper & Purpur 1.21+ servers**.

Bring moderation, player management, staff utilities, economy controls, permissions, punishments, and administrative tools together in **one clean interface**.

**⟡ Lightweight. ⟡ Powerful. ⟡ Fully Configurable.**

---

## Key Highlights

### ⟡ Built for Performance

* **Zero Repeating Schedulers**: No tick monitors, scanning loops, or unnecessary background tasks. SuperAdminGUI is built around an **event-driven architecture**.
* **Asynchronous SQLite Storage**: Staff notes, action logs, and jail states are stored asynchronously using SQLite WAL, keeping disk operations away from the main server thread.
* **Lightweight & Shading-Free**: The plugin is engineered to remain small and efficient without unnecessary bundled dependencies.

---

### ⟡ Complete Player Management

Everything your staff need ➜ accessible from a single Player Management Hub:

* ● **Detailed Player Information**: View playtime, ping, coordinates, IP, and balances.
* ⚠ **Full Moderation**: Warn, Mute, Kick, Ban, Jail, and Freeze players.
* ● **LuckPerms Group Management**: Assign groups and inspect ranks with hierarchy protection.
* ● **Economy Controls**: Direct integration with Vault and ExcellentEconomy (Florin).
* ● **Inventory & Ender Chest**: Real-time inspection, editing, and armor manipulation.
* ● **Instant Teleportation**: Teleport to player, bring player, or send to spawn.
* ● **Player Restrictions**: Toggle chat, commands, PvP, block breaking, and placing.
* ● **Private Staff Notes**: Keep persistent notes on players.
* ● **Staff Action Logs**: Comprehensive audit trail of all staff activities.

The Player Management Hub dynamically displays modules based on the staff member's configured role.

---

## Requirements

* **Server Software:** Paper or Purpur
* **Minecraft Version:** 1.21+
* **Java Version:** Java 21+ (matching modern Paper standards)

:::info Optional Integrations
Optional integrations (Vault, LuckPerms, AdvancedBan, etc.) are only required for the specific features they provide. If not installed, SuperAdminGUI gracefully disables those modules without errors.
:::
