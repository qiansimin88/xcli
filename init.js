const program = require('commander');
const chalk = require( 'chalk' )
const iqr = require( 'inquirer' )
const fs = require( 'fs-extra' )
const downGit = require( 'download-git-repo' )
const envinfo = require('envinfo')
const shell = require('shelljs');
const { spawn, execSync } = require('child_process');
const { resolve } = require( 'path' )
const r = chalk.red.bold
const g = chalk.green.bold
const packageJson = require('./package.json');
const ora = require( 'ora' )
const spinner = ora(  chalk.green.bold(' downloading template!! '))


program.version(packageJson.version)
  .usage('<command> [options]')
  .option('--info', 'print environment debug info')
  .arguments('init <project-name>')
  .action(name => {
    if(name !== 'init') {
      std(1, `第一个参数必须是 init, 比如 init demo`)
    }
  })

  program.command('init <project-name>')
  .description('创建一个模板项目')
  .action(async (name, cmd) => {
      iqr.prompt([
          {
              type: 'rawlist',
              name: 'type',
              message: '选择一个模板类型',
              choices: [
                'react-admin',
                'react-web',
                'react-h5',
                'react-next',
                'react-wechat-mini-programs'
              ]
          }
      ]).then( all => {
        const { type } = all
        if(type === 'react-admin') {
          spinner.start();
          donwGitRes(name)
        }else {
          std(0, '敬请期待，暂未开放该模板')
        }
      })
  })

  program.parse(process.argv);

const donwGitRes = ( templateName = 'templateName' ) => {
  // 本地保存的地址
    const stroeTemplatePath = resolve( __dirname, '../template' )
 // 生成 template 地址
    const createTemplatePath = resolve('./', templateName )
    downGit('github:qiansimin88/react-admin-antdesign-pro', stroeTemplatePath, err => {
        if (err) {
            std(1, '远程模板仓库出现了错误' + err )
        }else {
            fs.copy( stroeTemplatePath, createTemplatePath, { clobber : true }, ( err ) => {
                if (err) {
                    std(1, '本地复制模板出现了错误' + err )
                }else {
                    spinner.stop()
                    updatePackageName(createTemplatePath, templateName)
                }
            })
        }
    })
}

// 修改名称
const updatePackageName = (path, templateName) => {
  try {
    const packageJsonPath = `${path}/package.json`
    const originalPackJson = fs.readJsonSync(packageJsonPath)
    fs.writeJSONSync(packageJsonPath, { ...originalPackJson, ...{ name: templateName} }, {
      spaces: 2
    })
  } catch (error) {
    std(`重写 packjson.json出错了`)
  }
}

function std (code, str) {
    console.error(r(str || 'gg'))
    spinner && spinner.stop()
    process.exit(code)
}

  if (program.info) {
    console.log(chalk.green.bold('\nEnvironment Info:'));
    console.log(
      `\n  current version of ${packageJson.name}: ${packageJson.version}`
    );
    console.log(`  running from ${__dirname}`);
    console.log( g('项目默认在当前路径建立全新项目') )
    return envinfo
      .run(
        {
          System: ['OS', 'CPU'],
          Binaries: ['Node', 'npm', 'Yarn'],
          Browsers: ['Chrome', 'Edge', 'Internet Explorer', 'Firefox', 'Safari'],
          npmPackages: ['react', 'react-dom', 'react-scripts']
        },
        {
          duplicates: true,
          showNotFound: true,
        }
      )
      .then(console.log);
  }

  // if(!projectName) {
  //   console.log( r('必须输入项目名称') )
  //   console.log(`比如：
  //       ${g(program.name())} ${g('init')} ${g('demo')}
  //   `)
  //   process.exit(1)
  // }


