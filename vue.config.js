// const path = require('path');
// function resolve (dir) {
//   return path.join(__dirname, dir)
// }
// module.exports = {
//   lintOnSave: true,
//   chainWebpack: (config)=>{
//     config.resolve.alias
//       .set('@$', resolve('src'))
//       .set('assets',resolve('src/assets'))
//       .set('components',resolve('src/components'))
//       .set('layout',resolve('src/layout'))
//       .set('base',resolve('src/base'))
//       .set('static',resolve('src/static'))
//   }
// }

module.exports = {
    configureWebpack :{
        resolve :{
            // 配置别名
            alias: {

                'assets' :'@/assets',
                'common' :'@/common',
                'components' :'@/components',
                'network' :'@/network',
                // 'view' :'@/views'
            }
        }
    }
}
