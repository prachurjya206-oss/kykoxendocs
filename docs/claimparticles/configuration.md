---
sidebar_position: 3
id: configuration
title: Configuration Guide
description: Detailed explanation of config.yml settings, Y-height modes, and LuckPerms integration.
---

# Configuration Guide

The configuration file is located at `plugins/ClaimParticles/config.yml`. You can safely modify these options and apply changes without restarting the server using `/claimparticles reload`.

---

## Default `config.yml`

```yaml
# ==========================================
# Default Particle Settings
# ==========================================
default-enabled: true
default-particle: FLAME

# The distance in blocks between particles on the claim border
particle-spacing: 0.5

# How often (in ticks) to refresh particles (20 ticks = 1 second)
# 5 ticks means 4 updates per second (static, non-blinking look)
update-interval: 5

# ==========================================
# Particle Height Display Settings
# ==========================================
# y-mode Options:
#   - "PLAYER"       : Shows particles around the claim at the player's current Y height (+ player-y-offset).
#   - "CUSTOM_RANGE" : Shows particles across a custom Y level range (from custom-y-min to custom-y-max).
y-mode: PLAYER

# Offset added to the player's Y level when y-mode is "PLAYER"
player-y-offset: 1.0

# Range settings used when y-mode is "CUSTOM_RANGE"
custom-y-min: 60.0
custom-y-max: 100.0
# Vertical spacing (in blocks) between horizontal particle layers when y-mode is "CUSTOM_RANGE"
custom-y-step: 2.0

# ==========================================
# Permission Settings
# ==========================================
# If true, players need the permission "claimparticles.particle.<type>" to select a particle
require-permissions-per-particle: false

# Which particles users are allowed to choose (10 selected options)
allowed-particles:
  - FLAME
  - HEART
  - HAPPY_VILLAGER
  - ANGRY_VILLAGER
  - NOTE
  - ENCHANT
  - PORTAL
  - ITEM_SLIME
  - ITEM_SNOWBALL
  - CLOUD
```

---

## Y Height Modes Explained

### 1. `PLAYER` Mode (Default)
In `PLAYER` mode, claim border particles follow the player dynamically as they jump, climb, or fly.
* **`player-y-offset`**: Controls the height above the player's feet (e.g. `1.0` renders particles at torso height).

### 2. `CUSTOM_RANGE` Mode
In `CUSTOM_RANGE` mode, the plugin draws a complete **3D visual cage** around claims between `custom-y-min` and `custom-y-max`.
* **Horizontal Layers:** Drawn every `custom-y-step` blocks vertically.
* **Vertical Corner Pillars:** Drawn at all 4 corners of the claim from `custom-y-min` to `custom-y-max`.

:::tip Recommended Settings for 3D Cage
For optimal visuals and performance in `CUSTOM_RANGE` mode:
- `custom-y-min: 60.0`
- `custom-y-max: 100.0`
- `custom-y-step: 2.0`
:::

---

## LuckPerms Per-Particle Permissions

To restrict specific particle types to VIP ranks or donors:

1. Set `require-permissions-per-particle: true` in `config.yml`.
2. Run `/claimparticles reload`.
3. Grant permission nodes via LuckPerms:
   ```bash
   # Grant heart particles to a player
   /lp user <player> permission set claimparticles.particle.heart true

   # Grant all particles to a VIP group
   /lp group vip permission set claimparticles.particle.all true
   ```
