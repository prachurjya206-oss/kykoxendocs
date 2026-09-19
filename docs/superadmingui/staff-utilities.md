---
sidebar_position: 4
id: staff-utilities
title: Staff Utilities Hub
description: In-depth guide to staff self-management tools, vanish integration, speed controls, and world manipulation.
---

# Staff Utilities Hub

SuperAdminGUI features a dedicated **Staff Self-Management Hub** accessible directly by running `/superadmingui` without specifying a player target.

This hub allows staff to manage their own moderator status, movement, appearance, and environment quickly and reliably.

---

## 🎮 Gamemode Switcher

Seamlessly transition between all 4 Minecraft game modes with a single click. Each mode can be controlled by granular permission nodes:

* **Survival** (`superadmingui.staff.gamemode.survival`)
* **Creative** (`superadmingui.staff.gamemode.creative`)
* **Adventure** (`superadmingui.staff.gamemode.adventure`)
* **Spectator** (`superadmingui.staff.gamemode.spectator`)

---

## 👻 Vanish Integration

SuperAdminGUI integrates seamlessly with leading vanish plugins:
* **SuperVanish**
* **PremiumVanish**
* **EssentialsX**

If no third-party vanish plugin is found, SuperAdminGUI falls back to Paper’s native player-hiding API (`Player#hidePlayer`).

### Permissions
* `superadmingui.staff.vanish` — Toggle vanish on and off.
* `superadmingui.staff.vanish.see` — Allows staff to see other vanished staff members.

---

## 🧪 Quick Utilities

One-click administrative toggles and restorations:

* 🪽 **Flight** (`superadmingui.staff.fly`): Enable or disable server flight without creative mode.
* 🛡️ **God Mode** (`superadmingui.staff.god`): Complete invulnerability to damage and status effects.
* 👻 **Invisibility** (`superadmingui.staff.invisibility`): Toggle potion invisibility.
* ❤️ **Heal** (`superadmingui.staff.heal`): Instantly restore full health and extinguish fire.
* 🍖 **Feed** (`superadmingui.staff.feed`): Replenish hunger bar and saturation.
* 🌙 **Night Vision** (`superadmingui.staff.nightvision`): Toggle permanent night vision effect for moderation in dark caves.
* 🥛 **Clear Effects** (`superadmingui.staff.cleareffects`): Remove all active potion effects.

---

## 💨 Movement Speed Control

**1× → 2× → 3× → 4× → 5×**

Quickly traverse large survival worlds and claims without needing external speed commands. Controlled by `superadmingui.staff.speed`.

---

## 🧭 Staff Teleportation

Quickly navigate the server without remembering coordinates or warp names:

* **World Spawn**: Jump to the current world's spawn location.
* **Previous Location (`/back`)**: Return to the location you occupied prior to your last teleport.
* **Safe Random Teleport (RTP)**: Teleport safely to a wilderness location to inspect claims.
* **Configured Staff Locations**: Jump directly to preset coordinates configured in `config.yml` (e.g., staff lounge, report zones, jail areas).

---

## 🌤️ World Time & Weather Controls

Quickly set the world state for testing or event moderation:

### Time Control
* **Day** (`1000` ticks)
* **Noon** (`6000` ticks)
* **Night** (`13000` ticks)
* **Midnight** (`18000` ticks)

### Weather Control
* **Clear**: Remove rain and thunderstorms.
* **Rain**: Trigger ambient rainfall.
* **Thunderstorm**: Trigger stormy weather with lightning.
