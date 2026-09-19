---
sidebar_position: 2
id: installation
title: Installation & Setup
description: Step-by-step guide to installing ClaimParticles on your Minecraft server.
---

# Installation & Setup

Getting **ClaimParticles** running on your server takes less than 2 minutes!

---

## Server Prerequisites

Before installing, ensure your server meets the following requirements:

| Component | Requirement | Recommended & Compatibility |
| :--- | :--- | :--- |
| **Java Environment** | Java 21 or higher | Java 21 LTS (matching modern Paper standards) |
| **Server Software** | Minecraft 1.21.x | [PaperMC](https://papermc.io/), Purpur, or Spigot |
| **Required Plugin** | [GriefPrevention](https://github.com/TechFortress/GriefPrevention) (v16.18+) | Base land claiming plugin dependency |

:::warning Dependency Required
ClaimParticles is an **addon** for GriefPrevention. It will automatically disable itself on startup if GriefPrevention is missing from your server's `plugins/` folder.
:::

---

## Installation Steps

1. **Download the Plugin:**
   Download the latest `ClaimParticles-1.0.0.jar` from [Modrinth](https://modrinth.com/plugin/claimparticles) or [GitHub Releases](https://github.com/prachurjya206-oss/ClaimParticles/releases).

2. **Place in Plugins Directory:**
   Copy `ClaimParticles-1.0.0.jar` into your Minecraft server's `plugins/` directory alongside `GriefPrevention.jar`.

3. **Start / Restart Server:**
   Start or restart your server. ClaimParticles will automatically generate its default configuration file at `plugins/ClaimParticles/config.yml`.

4. **Verify Installation:**
   Run `/claimparticles reload` in the server console or in-game (as OP). If installed properly, you will see:
   ```text
   [ClaimParticles] ClaimParticles configuration and tasks reloaded.
   ```

---

## Upgrading

To upgrade ClaimParticles to a newer version:
1. Stop your server or remove the old `.jar` file from `plugins/`.
2. Drop the new `ClaimParticles-x.x.x.jar` into `plugins/`.
3. Restart your server. Your existing `config.yml` will be preserved!
