import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'EMQX-Guard-Pro/index',
      label: 'emqx_guard_pro',
    },
    {
      type: 'category',
      label: '📚 Introduction',
      link: {
        type: 'doc',
        id: 'EMQX-Guard-Pro/introduction',
      },
      items: [],
    },
    {
      type: 'category',
      label: '🔧 Installation',
      link: {
        type: 'doc',
        id: 'EMQX-Guard-Pro/installation',
      },
      items: [],
    },
    {
      type: 'category',
      label: '✨ Feature',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Features',
        description: 'Explore the features of EMQX Guard Pro',
        slug: '/category/features',
      },
      items: [
        'EMQX-Guard-Pro/features/alarm',
        'EMQX-Guard-Pro/features/changed_configuration',
        'EMQX-Guard-Pro/features/risk_configuration',
        'EMQX-Guard-Pro/features/duplicate_configuration',
        'EMQX-Guard-Pro/features/inconsistent_configuration',
        'EMQX-Guard-Pro/features/auto_backup',
        'EMQX-Guard-Pro/features/conn_congestion_trace',
        'EMQX-Guard-Pro/features/potential_problem',
      ],
    },
    {
      type: 'category',
      label: '⚙️ Configuration',
      link: {
        type: 'generated-index',
        title: 'Configuration',
        description: 'Configure notification channels for EMQX Guard Pro',
        slug: '/category/configuration',
      },
      items: [
        'EMQX-Guard-Pro/configuration/Gmail',
        'EMQX-Guard-Pro/configuration/Slack',
        'EMQX-Guard-Pro/configuration/QQMail',
        'EMQX-Guard-Pro/configuration/Wechat',
        'EMQX-Guard-Pro/configuration/Feishu',
        'EMQX-Guard-Pro/configuration/DingTalk',
      ],
    },
  ],
};

export default sidebars;
