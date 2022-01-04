module.exports = function (plop) {
  plop.setGenerator('package', {
    description: 'create package',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'package name please',
      },
    ],
    actions: [
      // {
      //   // 批量添加文件
      //   type: 'addMany',
      //   destination: 'src/{{name}}/',
      //   templateFiles: 'plop-template/*',
      //   abortOnFail: false,
      //   force: true,
      // },
      {
        type: 'add',
        path: 'src/{{name}}/index.ts',
        templateFile: 'plop-template/src/index.hbs',
      },
      {
        type: 'add',
        path: 'src/{{name}}/index.md',
        templateFile: 'plop-template/src/readme.hbs',
      },
      {
        // 修改src/index.ts文件中的内容，在 pattern 匹配到的内容后追加 template 的内容
        type: 'append',
        path: 'src/index.ts',
        pattern: /\/\* inject \*\//,
        template: "export { default as {{name}} } from './{{name}}';",
      },
    ],
  });
};
