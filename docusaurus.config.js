const CONSTANTS = require("./constants");
const apiconfig = require('./apiconfig');
module.exports = {
  title: CONSTANTS.APP_TITLE,
  tagline: 'Commvault REST API Reference',
  url: 'http://jnaneshd.github.io',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'commvault', // Usually your GitHub org/user name.
  projectName: 'apidocs', // Usually your repo name.
  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=DM+Sans&display=swap',
    },
  ],
  themeConfig: {
    navbar: {
      title: CONSTANTS.APP_TITLE,
      logo: {
        alt: CONSTANTS.APP_TITLE,
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'dropdown',
          position: 'right',
          label: "Loading...",
          id: "CommcellTypeId",
          items: [{
            label: 'OnPrem',
            type: 'docSidebar',
            sidebarId: "OnPrem"
          },
          {
            label: 'Metallic',
            href: '/docs/api/cv2/Metallic/metallic-rest-api-reference',
            id: 'MetallicDropdownOption'
          }]
        },
        {
          type: 'custom-dogfood-navbar-item',
          position: 'right'
        }, {
          type: 'docsVersionDropdown',
          position: 'right',
          id: "versiondropdown"
        }
      ],
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false
    }, docs: {
      sidebar: {
        hideable: true,
      },
    },
  },
  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "apiDocs",
        docsPluginId: "classic",
        config: apiconfig
      },
    ]
  ],
  themes: ["docusaurus-theme-openapi-docs", '@easyops-cn/docusaurus-search-local'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        debug: true,
        docs: {
          versions: {
            current: {
              banner: 'none'
            }
          },
          sidebarCollapsible: true,
          sidebarCollapsed: true,
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://git.commvault.com/eng/docs/webdocs',
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem",
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      },
    ]
  ],
};