#! /usr/bin/env node

'use srtict'

const chalk = require( 'chalk' )
const w = chalk.red.bold

const major = process.version.split('.')[0]


if(major < 10) {
    console.error(
        w(`当前你的Node 环境 V${ major }
            太低了，最少要安装 v10 以上版本，建议 nvm 管理 Node :)
        `)   
    )
    process.exit(1)
}

require('../init')
