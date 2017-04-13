const htmlWebpackPlugin=require('html-webpack-plugin');  //html生成插件
const path=require('path');

module.exports={
    entry:'./src/app.js',
    output: {
        path: './dist',
        filename: 'js/[name].bundle.js',
        //publicPath: 'http://smallstar.club/'    //线上地址
    },
    module: {
      loaders:[
          {
              test: /\.js$/,
              loader: 'babel-loader',
              //exclude: './node_modules/',
              exclude: path.resolve(__dirname, './node_modules/'),
              include: './src/',
              query: {
                  presets: ['es2015']
              }
          },
          {
              test: /\.css$/,
              loader: 'style-loader!css-loader!autoprefixer-loader'
          },
          {
              test:/\.less$/,
              loader: 'style-loader!css-loader!less-loader!autoprefixer-loader'
          },
          {
              test:/\.html$/,
              loader: 'html-loader'
          },
          {
              test:/\.(png|jpg|gif|svg)$/i,
              loader:'url-loader',
              query:{
                  limit:20000,
                  name:'asset/[name]-[hash:5].[ext]'
              }
          }
      ]
    },
    plugins: [
        new htmlWebpackPlugin({   //通过htmlWebpackPlugin 来将js注入到html中
            filename: 'me.html',
            template: 'js.html',
            inject: 'body'
        })
    ]
}