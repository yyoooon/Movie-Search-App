const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin') // 폴더 카피 플러그인

module.exports = {
  resolve: {
    // 경로 작성 시 확장자 생략
    extensions: ['.vue', '.js'],
    // 절대 경로를 위한 경로 별칭
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/, //정규표현식 사용해 확장자 찾음, 찾으면 use의 vue-loader라는 패키지의 도움을 받아서 해석을 함
        use: 'vue-loader',
      },
      {
        test: /\.s?css$/, //정규표현식 사용해 확장자 찾음, 찾으면 use의 vue-loader라는 패키지의 도움을 받아서 해석을 함
        use: [
          // 순서 중요 : 먼저 해석되어야할 파일을 마지막에 배치해야함
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          { 
            loader: 'sass-loader',
            options: {
              additionalData: `
                @use "sass:color";
                @use "sass:list";
                @use "sass:map";
                @use "sass:math";
                @use "sass:meta";
                @use "sass:selector";
                @use "sass:string";
                @import "~/scss/_variables";
                @import "~/scss/_function";
                @import "~/scss/_reset";
              `
            }
          }
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlPlugin({
      template: 'src/index.html', // 해석할 html파일이 어디있는지 명시해줘야 함 - resolve()내장
    }),
    new CopyPlugin({
      patterns: [{ from: 'static' }], // 카피할 폴더 favicon은 주변에 있으면 html로 알아서 적용된다
    }),
  ],
  devServer: {
    historyApiFallback: true
  }
}
