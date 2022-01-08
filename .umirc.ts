import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'shengjs',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  analytics: {
    baidu: '654a8ba11b95d6862eac11e551395ee4',
  },
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'github',
      path: 'https://github.com/BestDingSheng/shengjs',
    },
    {
      title: 'dumi',
      path: 'https://d.umijs.org/zh-CN',
    },
    {
      title: 'npm',
      path: 'https://www.npmjs.com/package/shengjs',
    },
  ],
});
