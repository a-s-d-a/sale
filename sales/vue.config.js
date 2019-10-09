module.exports = {
    publicPath: './', //执行npm run build打包命令的时候，调整资源的引用路径
    devServer: { //当我们访问别人的接口，发生跨域问题的时候需要这个配置项
        proxy: {
            '/index': {
                target: 'http://api.yidejia.com',
                changeOrigin: true
            }
        }
    }
}