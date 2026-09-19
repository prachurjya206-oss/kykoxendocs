// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'ClaimParticles',
      collapsed: false,
      items: [
        'claimparticles/intro',
        'claimparticles/installation',
        'claimparticles/configuration',
        'claimparticles/commands-permissions',
        'claimparticles/faq',
      ],
    },
    {
      type: 'category',
      label: 'SuperAdminGUI',
      collapsed: false,
      items: [
        'superadmingui/intro',
        'superadmingui/installation',
        'superadmingui/player-management',
        'superadmingui/staff-utilities',
        'superadmingui/commands-permissions',
        'superadmingui/configuration',
      ],
    },
  ],
};

module.exports = sidebars;
