---
sidebar_position: 5
id: faq
title: FAQ & Performance
description: Frequently asked questions, performance impact analysis, and troubleshooting tips.
---

# FAQ & Performance

---

## Performance Impact

### Will ClaimParticles lag my server with 30–100+ players?
**No.** ClaimParticles is engineered for extreme efficiency:
1. **Unicast Packet Delivery:** Particles are sent directly to the individual player standing inside the claim. Other online players receive **0 network packets**.
2. **Fast Spatial Indexing:** Uses GriefPrevention’s in-memory hash maps to detect claims in **&lt;0.001 ms**.
3. **Throttled Task Updates:** Operates on an `update-interval` of 5 ticks (4 refreshes/sec) rather than 20 ticks/sec, reducing CPU load by **75%**.

---

## Troubleshooting & Common Questions

### Why aren't particles showing up when I stand in a claim?
1. Check if particles are toggled on: `/cp toggle`.
2. Ensure video settings in your Minecraft client have **Particles: All** or **Decreased** (not Minimal).
3. Verify that you are inside a GriefPrevention claim (using GriefPrevention's golden shovel).

### How do I add custom particles to the selection list?
Open `plugins/ClaimParticles/config.yml` and add valid Bukkit Particle enum names to the `allowed-particles` list:
```yaml
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
Then run `/cp reload`.

### Does ClaimParticles support Bedrock players (Geyser / Floodgate)?
**Yes!** Standard Bukkit particle packets (`player.spawnParticle`) are natively translated to Bedrock client particles by GeyserMC.
