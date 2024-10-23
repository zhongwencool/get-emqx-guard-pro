import * as path from 'path';
import { defineConfig } from 'rspress/config';
import alignImage from 'rspress-plugin-align-image';
import ga from 'rspress-plugin-google-analytics';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  ...(process.env.BASE_PATH ? { base: process.env.BASE_PATH } : {}),
  title: 'EMQX Guard Pro',
  description: 'EMQX-Guard-Pro is EMQX plugin that keeping your EMQX cluster robust and secure, provides real-time notifications to your email, slack, dingtalk, wechat, feishu and more.',
  icon: '/emqx-guardian.svg',
  logo: {
    light: '/emqx-guardian-logo.png',
    dark: '/emqx-guardian-logo.png',
  },
  globalStyles: path.join(__dirname, 'app/globals.css'),
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/zhongwencool/get-emqx-guard-pro' },
      {
        icon: 'discord',
        mode: 'link',
        content: 'https://discord.gg/HYRWRQDE',
      },
    ],
  },
  plugins: [alignImage(
    {
      justify: 'left',
      //containerClassNames: ['my-class'],
    }),
  ga({
    id: 'G-R31D2RQNVN',
  }),
  ],
});


