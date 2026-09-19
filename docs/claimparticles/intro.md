---
sidebar_position: 1
id: intro
title: Introduction
description: Overview and key features of the ClaimParticles Minecraft plugin addon for GriefPrevention.
---

# ClaimParticles

Welcome to the **ClaimParticles** documentation!

**ClaimParticles** is a lightweight, highly performant Paper/Spigot plugin addon for [GriefPrevention](https://github.com/TechFortress/GriefPrevention) that renders claim borders using customizable particle effects.

:::info Paper 1.21.x Ready
ClaimParticles is built against the **Paper API 1.21** and is fully forward-compatible across all 1.21 sub-versions (1.21, 1.21.1, 1.21.4, 1.21.11+).
:::

---

## Key Features

- ✨ **Visual Claim Borders:** Highlights GriefPrevention land claims with smooth, continuous particle boundaries.
- 🎨 **10 Curated Particle Options:** Safe, selected particle types out of the box (`FLAME`, `HEART`, `HAPPY_VILLAGER`, `ANGRY_VILLAGER`, `NOTE`, `ENCHANT`, `PORTAL`, `ITEM_SLIME`, `ITEM_SNOWBALL`, `CLOUD`).
- ⚡ **Static Display (No Blinking):** Configured to refresh at 5 ticks (4 times/sec), eliminating the annoying blinking effect found in standard particle tasks.
- 📐 **Dual Y Height Modes:**
  - **`PLAYER` Mode:** Particles follow the player's vertical height dynamically.
  - **`CUSTOM_RANGE` Mode:** Renders 3D boundary boxes with horizontal rings and vertical corner pillars across customizable Y ranges.
- 🔒 **LuckPerms Integration:** Support for gating individual particles behind permissions (`claimparticles.particle.<type>`).
- 🛡️ **Admin Tools & Hot Reloading:** Reload configuration files on the fly (`/claimparticles reload`) or remotely toggle particles for online players (`/claimparticles admin toggle <player>`).
- 🚀 **High Performance & Unicast:** Particles are spawned strictly to the target player, sending 0 extra network packets to other players.

---

## Quick Navigation

- 📦 [**Installation & Requirements**](./installation) — Prerequisites and step-by-step setup guide.
- ⚙️ [**Configuration Guide**](./configuration) — Detailed breakdown of `config.yml` and Y-height modes.
- 📜 [**Commands & Permissions**](./commands-permissions) — Complete reference table for commands and LuckPerms nodes.
- ❓ [**FAQ & Troubleshooting**](./faq) — Performance tips and common questions.
