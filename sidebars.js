// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Home Overview',
      className: 'sidebar-item-overview',
    },
    {
      type: 'category',
      label: 'ClaimParticles',
      className: 'sidebar-category-plugin sidebar-plugin-claimparticles',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'claimparticles/intro',
      },
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
      className: 'sidebar-category-plugin sidebar-plugin-superadmingui',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'superadmingui/intro',
      },
      items: [
        'superadmingui/intro',
        'superadmingui/installation',
        'superadmingui/player-management',
        'superadmingui/staff-utilities',
        'superadmingui/commands-permissions',
        'superadmingui/configuration',
      ],
    },
    {
      type: 'link',
      label: 'Need Custom Plugins?',
      href: 'https://discord.gg/pG6K6Kd4GB',
      className: 'sidebar-btn-custom-plugins',
    },
  ],
};

module.exports = sidebars;
