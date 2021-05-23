module.exports = {
  title: 'Bootcamp de Desarrollo Web',
  tagline: 'por DSC IPN - UPIITA',
  url: 'http://bootcamp-desarrollo-web.vercel.app/',
  baseUrl: '/',
  favicon: 'img/google_developers_logo.png',
  organizationName: 'dscipnupiita', // Usually your GitHub org/user name.
  projectName: 'bootcamp-desarrollo-web', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Bootcamp Desarrollo Web',
      logo: {
        alt: 'My Site Logo',
        src: 'img/google_developers_logo.png',
      },
      links: [
        {
          to: 'docs/welcome',
          activeBasePath: 'docs',
          label: 'Curso',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/dscipnupiita/bootcamp-desarrollo-web',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Más Información',
          items: [
            {
              label: 'Bienvenida',
              to: 'docs/welcome',
            },
            {
              label: 'Qué aprenderás',
              to: 'docs/curriculum',
            },
            {
              label: 'Requisitos',
              to: 'docs/requisites',
            },
            {
              label: 'Tareas y participación',
              to: 'docs/homework',
            },
            {
              label: 'Graduación',
              to: 'docs/graduation',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Developer Student Clubs',
              href: 'https://dsc.community.dev/national-polytechnic-institute-of-mexico-upiita/',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/DnChcJyEAN',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/dscipnupiita',
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
              href: 'https://github.com/dscipnupiita/bootcamp-desarrollo-web',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bootcamp de Desarrollo Web. Built with 💓 by DSC IPN - UPIITA.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/dscipnupiita/bootcamp-desarrollo-web',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/dscipnupiita/bootcamp-desarrollo-web/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
