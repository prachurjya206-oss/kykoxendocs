---
sidebar_position: 3
id: player-management
title: Player Management Hub
description: Complete breakdown of player moderation, punishment, economy, inventory, and notes features.
---

# Player Management Hub

The Player Management Hub is the core operational center of SuperAdminGUI. It consolidates player information, disciplinary actions, economy balances, and inventory tools into a single dynamic GUI.

To open the hub for a specific player:
```text
/superadmingui <player>
```

---

## 👤 Player Information Overview

Inspect comprehensive telemetry and account data for any online or offline player without running multiple commands:

* **Username & UUID**
* **Online / Offline Status**
* **First Joined Date & Last Seen Date**
* **Session Playtime & Lifetime Playtime**
* **Ping** (ms)
* **IP Address** *(Protected behind `superadmingui.ip.view` permission)*
* **Current World & Coordinates** (X, Y, Z)
* **Gamemode**
* **LuckPerms Rank & Primary Group**
* **Vault Economy Balance**
* **Florin (ExcellentEconomy) Balance**

---

## ⚖️ Punishment Management

SuperAdminGUI connects directly with **AdvancedBan** (or native Paper mechanisms) to execute disciplinary actions with duration and reason prompts:

* ⚠️ **Warn**: Issue formal warnings with reason tracking.
* 🔇 **Mute / 🔊 Unmute**: Silence players temporarily or permanently.
* 👢 **Kick**: Remove players from the server with a custom reason.
* 🚫 **Ban / 🔓 Unban**: Temporary or permanent IP/UUID bans with confirmation protection.
* ⛓️ **Jail / 🔓 Unjail**: Confine players to configured jail cells.
* ❄️ **Freeze / Unfreeze**: Lock player movement and interactions in place.

---

## ⛓️ Jail System

Create and manage custom jail cells configured inside `jails.yml`.

### Jail Workflow
1. Select a configured jail cell from the GUI.
2. Enter the punishment reason.
3. Choose duration (temporary or permanent).
4. SuperAdminGUI places the player in the cell and handles escape containment.

:::tip Event-Driven Containment
The jail system uses event listeners rather than continuous ticking schedulers, ensuring zero performance impact on the server main thread.
:::

---

## ⭐ LuckPerms Integration

Manage player permissions and roles directly from the interface:

* **Add Groups**: Grant secondary groups.
* **Remove Groups**: Strip roles from players.
* **Set Primary Group**: Promote or demote players.
* **View Hierarchy**: Inspect permissions.

### Hierarchy Defense
SuperAdminGUI respects LuckPerms group weights and hierarchy. Staff members cannot manage, kick, ban, or alter players who hold a higher group weight than themselves.

---

## 💰 Economy Management

### Vault Economy
Inspect and adjust player balances with configurable safety caps:
* **Add Money**
* **Remove Money**
* **Set Balance**
* **Reset Balance** to `$0.00`

### 💎 ExcellentEconomy (Florin)
If ExcellentEconomy is installed, staff can manage multi-currency balances directly:
* Add Florin
* Remove Florin
* Set Florin
* Reset Florin

---

## 🎒 Inventory & Ender Chest Management

Inspect and manipulate live player inventories in real time:

* **Player Inventory**: Live view of hotbar, main inventory, and equipped armor slots.
* **Ender Chest**: View and edit player ender chest items.
* **Clear Inventory**: Clear items with safety confirmation dialogs to prevent accidental loss.

---

## 🧭 Teleportation Controls

Move staff and players instantly:
* **Teleport to Player**: Teleport yourself to the target's current location.
* **Bring Player**: Safely teleport the target player to your location.
* **Send to Spawn**: Relocate the player to the default world spawn point.

---

## 🛡️ Player Restrictions

Dynamically toggle specific capabilities for problematic players without full bans:
* 💬 **Chat**: Silence a player's public chat messages.
* ⌨️ **Commands**: Block player from running any server commands.
* ⚔️ **PvP**: Restrict player from dealing or receiving player damage.
* ⛏️ **Block Breaking**: Prevent griefing by disabling block breaking.
* 🧱 **Block Placing**: Prevent unwanted placement.

---

## 📝 Staff Notes & Audit Logs

Keep administrative records organized inside the plugin:

### Private Staff Notes
Staff members can write notes attached to a player's UUID, readable only by authorized personnel.
* Create notes
* Read history
* Delete notes

### Action Logs
SuperAdminGUI logs all staff interventions to an asynchronous SQLite WAL database:
* **Per-Player Logs**: View every action taken against a specific user.
* **Global Logs**: Review the chronological server-wide administrative feed via `/superadmingui logs`.

---

## 🛡️ Confirmation Protection

To prevent staff misclicks, high-impact operations require explicit confirmation:

* Ban & Unban
* Clear Inventory
* Unjail
* Delete Staff Note

```text
✓ Confirm  ─── Executes the pending action
✕ Cancel   ─── Aborts and returns safely to previous menu
```
