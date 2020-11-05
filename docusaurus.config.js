module.exports = {
  title: 'DrDocx',
  tagline: 'Quickly organize patient data and generate Word reports',
  url: 'https://drdocx.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'DrDocx', // Usually your GitHub org/user name.
  projectName: 'DrDocx.com', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'DrDocx',
      logo: {
        alt: 'DrDocx Logo',
        src: 'img/icon.ico',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {to: 'about', label: 'About Us', position: 'left'},
        {
          href: 'https://github.com/DrDocx',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Installation Guide',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/DrDocx',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DrDocx.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'installation-guide',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
