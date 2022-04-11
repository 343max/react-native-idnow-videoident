// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
/* eslint-disable sort-keys */

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'React Native IDnow VideoIdent',
    tagline: 'React Native IDnow VideoIdent bindings for the iOS and Android SDK.',
    url: 'https://tokenstreet-tech.github.io',
    baseUrl: '/react-native-idnow-videoident/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'tokenstreet-tech', // Usually your GitHub org/user name.
    projectName: 'react-native-idnow-videoident', // Usually your repo name.
    deploymentBranch: 'gh-pages',
    trailingSlash: false,
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/tokenstreet-tech/react-native-idnow-videoident/tree/main/website/',
                },
                blog: {
                    showReadingTime: true,
                    editUrl: 'https://github.com/tokenstreet-tech/react-native-idnow-videoident/tree/main/website/',
                },
                theme: { customCss: require.resolve('./src/css/custom.css') },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'React Native IDnow VideoIdent',
                logo: { alt: 'tokenstreet Logo', src: 'img/logo.svg', srcDark: 'img/logoDark.svg' },
                items: [
                    { type: 'doc', docId: 'api/index', position: 'left', label: 'Docs' },
                    { to: '/blog', label: 'Blog', position: 'left' },
                    {
                        href: 'https://github.com/tokenstreet-tech/react-native-idnow-videoident',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [{ label: 'API', to: '/docs/api' }],
                    },
                    {
                        title: 'Company',
                        items: [
                            { label: 'Website', href: 'https://en.tokenstreet.com/' },
                            { label: 'Career', href: 'https://en.tokenstreet.com/career' },
                            { label: 'LinkedIn', href: 'https://www.linkedin.com/company/tokenstreet-com/' },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            { label: 'Blog', to: '/blog' },
                            { label: 'Medium', href: 'https://medium.com/tokenstreet-tech' },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/tokenstreet-tech/react-native-idnow-videoident',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} tokenstreet GmbH`,
            },
            prism: { theme: lightCodeTheme, darkTheme: darkCodeTheme },
        }),
    plugins: [
        [
            'docusaurus-plugin-typedoc',
            // Plugin / TypeDoc options
            {
                entryPoints: ['../src/index.ts'],
                tsconfig: '../tsconfig.json',
            },
        ],
    ],
};

module.exports = config;