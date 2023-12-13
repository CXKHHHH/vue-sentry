const { defineConfig } = require("@vue/cli-service");
const  { sentryWebpackPlugin }  =  require ( "@sentry/webpack-plugin" ) ; 
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:{
    devtool : "source-map" ,  // 必须打开源映射生成
    plugins : [ 
      sentryWebpackPlugin ( { 
        org:"qweda",
        project :"javascript-vue",
        authToken:"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"
      } ) , 
    ] , 
  }
});
