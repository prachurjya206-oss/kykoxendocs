---
sidebar_position: 1
id: intro
slug: /
title: Overview
description: Official technical documentation and references for KYKOXEN Minecraft plugins.
---

# KYKOXEN Plugin Documentation

Welcome to the official technical documentation hub for **KYKOXEN** Minecraft server plugins.

Select a plugin from the sidebar or choose a guide below to view complete installation steps, configuration manuals, command syntaxes, and permission nodes.

---

## Active Plugins

### ⟡ [ClaimParticles](/claimparticles/intro)
**High-performance visual claim boundary addon for GriefPrevention.**
* **Supported Platforms:** Paper & Purpur 1.21.x
* **Key Features:** Zero-flicker asynchronous particle tasks, dual-height visualization, unicast player packets, and LuckPerms per-particle permissions.
* **Quick Links:** [Installation](/claimparticles/installation) • [Configuration Reference](/claimparticles/configuration) • [Commands & Permissions](/claimparticles/commands-permissions) • [FAQ & Performance](/claimparticles/faq)

---

### ⟡ [SuperAdminGUI](/superadmingui/intro)
**The ultimate lightweight staff operations and player management suite.**
* **Supported Platforms:** Paper & Purpur 1.21+
* **Key Features:** Event-driven architecture (zero repeating tick monitors), asynchronous SQLite WAL logging, full moderation/punishment tools (AdvancedBan), Vault & ExcellentEconomy (Florin), and custom staff roles.
* **Quick Links:** [Installation](/superadmingui/installation) • [Player Management Hub](/superadmingui/player-management) • [Staff Utilities](/superadmingui/staff-utilities) • [Commands & Permissions](/superadmingui/commands-permissions) • [Configuration & Placeholders](/superadmingui/configuration)

---

## Engineering Standards

All KYKOXEN plugins follow strict performance and design principles:
* **Event-Driven:** No tick monitors, scanning loops, or unnecessary schedulers.
* **Non-Blocking I/O:** Database operations and logs are dispatched asynchronously to preserve solid 20.0 TPS.
* **Modern Server Standards:** Native Paper/Purpur 1.21+ support, Java 21 LTS, and Kyori Adventure MiniMessage formatting.

For official plugin downloads and updates, visit the [KYKOXEN Modrinth Profile](https://modrinth.com/user/Kykoxen).
