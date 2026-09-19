---
sidebar_position: 6
id: configuration
title: Configuration & Placeholders
description: Full breakdown of configuration files, Adventure MiniMessage formatting, and dynamic placeholders.
---

# Configuration & Placeholders

SuperAdminGUI is completely customizable. You can tailor menus, inventory layouts, sounds, item lore, messages, and role permissions to align with your server's identity.

---

## 🎨 Configuration Files Breakdown

All settings are organized into dedicated configuration files inside `plugins/SuperAdminGUI/`:

| File | Purpose |
| :--- | :--- |
| `config.yml` | Core database settings (SQLite WAL), hierarchy checks, safety limits & staff locations. |
| `modules.yml` | Toggle individual player management modules on or off. |
| `gui.yml` | Complete GUI layouts, slot matrices, glass borders, materials, and UI sounds. |
| `roles.yml` | Custom staff role hierarchies, role permissions, and assigned modules. |
| `messages.yml` | All user-facing chat messages, alerts, and MiniMessage strings. |
| `jails.yml` | Jail cell coordinates, world anchors, and cell designations. |

---

## ✨ Modern Adventure & MiniMessage Formatting

SuperAdminGUI natively uses **Kyori Adventure & MiniMessage** rather than outdated legacy color codes (`&a`, `&c`).

You can use modern formatting tags anywhere in `messages.yml` and `gui.yml`:
* **Hex Colors**: `<#38bdf8>Custom Cyan</#38bdf8>`
* **Gradients**: `<gradient:#ff7e5f:#feb47b>Warm Orange Gradient</gradient>`
* **Formatting Tags**: `<bold>`, `<italic>`, `<underlined>`, `<strikethrough>`
* **Hover & Click Events**: `<hover:show_text:'Click to view'>`

---

## 🏷️ Internal Dynamic Placeholders

Use dynamic placeholders inside messages, item names, and lore:

| Placeholder | Replaced Value |
| :--- | :--- |
| `{player}` / `{target}` | Target player's username |
| `{staff}` | Staff member's username |
| `{uuid}` | Target player's UUID |
| `{status}` | Online / Offline status badge |
| `{rank}` | Primary LuckPerms rank |
| `{balance}` | Formatted Vault balance |
| `{florin}` | Formatted Florin balance |
| `{reason}` | Action or punishment reason |
| `{duration}` | Formatted punishment duration (e.g. `1d 12h`) |
| `{jail}` | Jail cell identifier name |
| `{page}` | Current GUI page index |
| `{total_pages}` | Total pages available in list |
| `{filter}` | Currently active player filter |
| `{coords}` | Player coordinates (`X, Y, Z`) |
| `{time}` | Current world time |
| `{weather}` | Current weather status |
| `{seconds}` | Active chat slowmode seconds |

---

## 🔤 PlaceholderAPI Support

SuperAdminGUI full supports external PlaceholderAPI placeholders within item lores, menus, and messages.

Examples:
* `%vault_eco_balance%`
* `%luckperms_prefix%`
* `%player_ping%`
* `%statistic_time_played%`
