// @ts-check
// Note: type annotations allow type checking and IDE autocompletion

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KYKOXEN Documentation',
  tagline: 'Official technical documentation & guides for KYKOXEN Minecraft plugins.',
  favicon: 'img/kykoxen-logo.png',

  url: 'https://wiki.kykoxen.com',
  baseUrl: '/',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Docs-only mode: documentation is served directly at the root
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'KYKOXEN',
        logo: {
          alt: 'KYKOXEN Logo',
          src: 'img/kykoxen-logo.png',
          width: 32,
          height: 32,
        },
        items: [
          {
            to: '/claimparticles/intro',
            label: 'ClaimParticles',
            position: 'left',
          },
          {
            to: '/superadmingui/intro',
            label: 'SuperAdminGUI',
            position: 'left',
          },
          {
            href: 'https://modrinth.com/user/Kykoxen',
            label: 'Modrinth Profile ↗',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'KYKOXEN Plugins',
            items: [
              {
                label: 'Documentation Home',
                to: '/',
              },
              {
                label: 'ClaimParticles',
                to: '/claimparticles/intro',
              },
              {
                label: 'SuperAdminGUI',
                to: '/superadmingui/intro',
              },
            ],
          },
          {
            title: 'ClaimParticles',
            items: [
              {
                label: 'Installation',
                to: '/claimparticles/installation',
              },
              {
                label: 'Configuration',
                to: '/claimparticles/configuration',
              },
              {
                label: 'Commands & Permissions',
                to: '/claimparticles/commands-permissions',
              },
              {
                label: 'FAQ & Performance',
                to: '/claimparticles/faq',
              },
            ],
          },
          {
            title: 'SuperAdminGUI',
            items: [
              {
                label: 'Installation',
                to: '/superadmingui/installation',
              },
              {
                label: 'Player Management',
                to: '/superadmingui/player-management',
              },
              {
                label: 'Staff Utilities',
                to: '/superadmingui/staff-utilities',
              },
              {
                label: 'Commands & Permissions',
                to: '/superadmingui/commands-permissions',
              },
              {
                label: 'Configuration & Placeholders',
                to: '/superadmingui/configuration',
              },
            ],
          },
          {
            title: 'Creator & Community',
            items: [
              {
                label: 'Modrinth: Kykoxen',
                href: 'https://modrinth.com/user/Kykoxen',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} KYKOXEN. High Performance Minecraft Server Plugins.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['yaml', 'bash', 'json', 'java'],
      },
    }),
};

module.exports = config;
