function BoneScreen(options) {
  options = options || {};
  this.options = options;
}

BoneScreen.prototype.insertBone = function (htmlData, callback) {

  htmlData.html = htmlData.html.replace(' <div id="app"></div>', ' <div id="app"><div>我是骨架</div></div>')
  callback(null, htmlData);
}

BoneScreen.prototype.apply = function (complier) {
  //webpack4.0
  if (complier.hooks) {
    complier.hooks.compilation.tap('BoneScreen', compilation => {
      if (compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing) {
        // HtmlWebPackPlugin 3.x
        compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tapAsync('BoneScreen', (htmlData, callback) => {
          this.insertBone(htmlData, callback);
        });
      } else {
        // HtmlWebPackPlugin 4.x
        const HtmlWebpackPlugin = require('html-webpack-plugin');
        HtmlWebpackPlugin.getHooks(compilation).beforeAssetTagGeneration.tapAsync('BoneScreen', (htmlData, callback) => {
          this.insertBone(htmlData, callback);
        });
      }
    })
  }
  //webpack3.0
  else {
    compiler.plugin('compilation', compilation => {
      compilation.plugin('html-webpack-plugin-before-html-processing', (htmlData, callback) => {
        this.insertBone(compilation, htmlData, callback);
      });
    });
  }
}
module.exports = BoneScreen