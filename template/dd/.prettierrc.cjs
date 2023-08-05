/*
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-07-18 03:19:42
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-07-18 03:48:07
 * @FilePath: /eslint-react-vite-ts-template/.prettierrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// commonjs 风格  但是packjson type = module 所以必须以cjs结尾
module.exports = {
    printWidth: 100, // 一行的字符数，如果超过会进行换行
    tabWidth: 4, // 一个tab代表几个空格数，默认就是2
    useTabs: false, // 是否启用tab取代空格符缩进，.editorconfig设置空格缩进，所以设置为false
    semi: false, // 行尾是否使用分号，默认为true
    singleQuote: true, // 字符串是否使用单引号
    trailingComma: 'none', // 对象或数组末尾是否添加逗号 none| es5| all
    jsxSingleQuote: true, // 在jsx里是否使用单引号，你看着办
    bracketSpacing: true, // 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
    arrowParens: 'avoid' // 箭头函数如果只有一个参数则省略括号
}
