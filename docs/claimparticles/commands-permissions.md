---
sidebar_position: 4
id: commands-permissions
title: Commands & Permissions
description: Comprehensive reference for all commands, aliases, tab completion, and permission nodes.
---

# Commands & Permissions

ClaimParticles features full **tab completion** for all commands, subcommands, particle types, and online player names!

---

## Commands Reference

| Command | Subcommands / Arguments | Description | Default Permission |
| :--- | :--- | :--- | :--- |
| `/claimparticles` | `[toggle]` | Toggles particle visibility on/off for yourself. | *(Everyone)* |
| `/claimparticles` | `type <particle>` | Changes your active particle effect. | *(Everyone / Perm)* |
| `/claimparticles` | `reload` | Reloads `config.yml` and restarts particle tasks. | `claimparticles.admin.reload` |
| `/claimparticles` | `admin toggle <player>` | Remotely toggles particles for another online player. | `claimparticles.admin.toggle` |

:::info Command Aliases
You can also use `/cp` or `/claimparticle` instead of typing out `/claimparticles`.
:::

---

## Command Examples

- **Toggle your own particles:**
  ```bash
  /cp toggle
  ```

- **Set your particle type to Hearts:**
  ```bash
  /cp type HEART
  ```
  *(Press `Tab` while typing `/cp type ` to see all 10 allowed particles in the autocomplete menu).*

- **Reload config as an Admin:**
  ```bash
  /cp reload
  ```

- **Toggle particles for player `Steve`:**
  ```bash
  /cp admin toggle Steve
  ```

---

## Permission Nodes

| Permission Node | Description | Default Target |
| :--- | :--- | :--- |
| `claimparticles.admin.reload` | Grants permission to use `/claimparticles reload`. | **OP Only** |
| `claimparticles.admin.toggle` | Grants permission to use `/claimparticles admin toggle <player>`. | **OP Only** |
| `claimparticles.particle.all` | Allows choosing any allowed particle when per-particle perms are on. | **True** (Everyone) |
| `claimparticles.particle.<type>` | Grants access to a specific particle type (e.g. `claimparticles.particle.heart`). | **OP Only** |

:::note LuckPerms Compatibility
Permission checks integrate seamlessly with LuckPerms, Vault, and standard Bukkit permission plugins.
:::
