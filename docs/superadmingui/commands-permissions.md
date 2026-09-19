---
sidebar_position: 5
id: commands-permissions
title: Commands & Permissions
description: Complete reference table for commands, permission nodes, and configurable staff roles.
---

# Commands & Permissions

Comprehensive reference for all SuperAdminGUI commands, aliases, permission nodes, and role configurations.

---

## ⌨️ Command Reference

| Command | Aliases | Permission | Description |
| :--- | :--- | :--- | :--- |
| `/superadmingui` | `/sag`, `/admin`, `/staffgui` | `superadmingui.use` | Opens the main staff dashboard & utilities hub. |
| `/superadmingui <player>` | `/sag <player>` | `superadmingui.use` | Opens the Player Management Hub for a target player. |
| `/superadmingui logs` | `/sag logs` | `superadmingui.module.logs` | Opens the global staff audit action log. |
| `/superadmingui reload` | `/sag reload` | `superadmingui.reload` | Hot-reloads all plugin configuration files. |

---

## 🔐 Administrative Permissions

| Permission Node | Default | Description |
| :--- | :--- | :--- |
| `superadmingui.use` | `op` | Allows opening the main SuperAdminGUI interface. |
| `superadmingui.admin` | `op` | Full administrative bypass and complete GUI feature access. |
| `superadmingui.reload` | `op` | Grants permission to execute `/superadmingui reload`. |
| `superadmingui.bypass` | `false` | Immunity against staff moderation actions (cannot be kicked, banned, etc.). |
| `superadmingui.ip.view` | `op` | Allows viewing raw player IP addresses inside player information. |

---

## 👥 Staff Roles (`roles.yml`)

SuperAdminGUI does not force you into a hardcoded hierarchy. You can define custom staff roles with granular module permissions inside `roles.yml`.

### Default Example Roles

| Permission | Role | Default Granted Access |
| :--- | :--- | :--- |
| `superadmingui.role.trial` | **Trial Moderator** | Warn, Kick, Mute, Player Info, Notes & Punishment History. |
| `superadmingui.role.moderator` | **Moderator** | Adds Ban, Jail, Freeze, Teleportation & Player Restrictions. |
| `superadmingui.role.admin` | **Admin** | Adds Economy, Inventory Editing, Utilities, Chat & Global Logs. |
| `superadmingui.role.operator` | **Operator** | Complete unrestricted access across all modules. |

---

## 🧑‍💼 Staff Utility Permissions

| Permission Node | Description |
| :--- | :--- |
| `superadmingui.staff.use` | Allows opening the Staff Self-Management Hub. |
| `superadmingui.staff.gamemode.survival` | Access Survival mode selector. |
| `superadmingui.staff.gamemode.creative` | Access Creative mode selector. |
| `superadmingui.staff.gamemode.adventure` | Access Adventure mode selector. |
| `superadmingui.staff.gamemode.spectator` | Access Spectator mode selector. |
| `superadmingui.staff.vanish` | Toggle staff vanish. |
| `superadmingui.staff.vanish.see` | See vanished staff members. |
| `superadmingui.staff.invisibility` | Toggle invisibility effect. |
| `superadmingui.staff.fly` | Toggle server flight. |
| `superadmingui.staff.god` | Toggle God Mode. |
| `superadmingui.staff.heal` | Instantly heal yourself. |
| `superadmingui.staff.feed` | Instantly replenish hunger. |
| `superadmingui.staff.cleareffects` | Clear all active potion effects. |
| `superadmingui.staff.nightvision` | Toggle Night Vision. |
| `superadmingui.staff.speed` | Open movement speed selector menu. |
| `superadmingui.staff.teleport` | Open staff teleportation hub. |
| `superadmingui.staff.teleport.spawn` | Teleport to world spawn. |
| `superadmingui.staff.teleport.staff` | Teleport to configured staff locations. |
| `superadmingui.staff.teleport.back` | Teleport to previous position. |
| `superadmingui.staff.teleport.random` | Use safe random teleport. |
| `superadmingui.staff.time` | Access world time controls. |
| `superadmingui.staff.weather` | Access world weather controls. |
