import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

// schema: https://github.com/shuding/nextra/blob/2f001d897f2109b24600f66fe2009e5f788b980c/packages/nextra-theme-docs/src/constants.tsx#L48
// default: https://github.com/shuding/nextra/blob/2f001d897f2109b24600f66fe2009e5f788b980c/packages/nextra-theme-docs/src/constants.tsx#L186
const config: DocsThemeConfig = {
  logo: <img src="/assets/logo.svg" alt="Baseline" width="100" height="40" />,
  project: {
    link: 'https://github.com/0xBaseline/baseline-docs',
  },
  chat: {
    link: 'https://discord.gg/baseline',
  },
  docsRepositoryBase: 'https://github.com/0xBaseline/baseline-docs/blob/main',
  footer: {
    text: 'Baseline docs',
  },
  // primaryHue: 89,
  nextThemes: {
    defaultTheme: 'dark',
    storageKey: 'theme'
  },
  // turn off themeswitch
  darkMode: false,
  themeSwitch: {component: <></>},
  head: (
    <>
      <meta name="msapplication-TileColor" content="#000" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Baseline: Docs" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@baselinemarkets" />
      <meta property="og:title" content="Baseline: Docs" />
      <meta property="og:description" content="Baseline: Docs" />
      <meta name="apple-mobile-web-app-title" content="Baseline Docs" />
    </>
  ),
  // useNextSeoProps: () => ({ titleTemplate: '%s – Baseline' })
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath === '/') return {titleTemplate: "Baseline" }
    if (asPath === '/blv') return {titleTemplate: "BLV - Baseline" }
    return {
      titleTemplate: "%s – Baseline"
    }
  },
  sidebar: { defaultMenuCollapseLevel: 2,  // Collapses items beyond level 1
   

  },


}

export default config
