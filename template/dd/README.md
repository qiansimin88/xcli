<!--
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-07-18 03:49:28
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-07-18 04:50:20
 * @FilePath: /eslint-react-vite-ts-template/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

1 代码格式规范和语法检测

-   vscode：统一前端编辑器。
-   editorconfig: 统一团队 vscode 编辑器默认配置(EditorConfig vs 插件)。
-   prettier: 保存文件自动格式化代码(Prettier - Code formatter vs 插件)。
-   .vscode settings.json 配置 保存即修复
-   eslint: 检测代码语法规范和错误 (ESLint vs 插件)。
-   lint-staged: 只检测暂存区文件代码，优化 eslint 检测速度(pnpm i lint-staged@12.5.0 -D)。

2 代码 git 提交规范

-   husky:可以监听 githooks 执行，在对应 hook 执行阶段做一些处理的操作(pnpm i husky -D && npx husky install)。
-   pre-commit：githooks 之一， 在 commit 提交前使用 tsc 和 eslint 对语法进行检测。
-   commit-msg：githooks 之一，在 commit 提交前对 commit 备注信息进行检测。
-   commitlint：在 githooks 的 pre-commit 阶段对 commit 备注信息进行检测。
-   commitizen：git 的规范化提交工具，辅助填写 commit 信息。
