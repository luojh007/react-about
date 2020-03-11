module.exports = function (source) {

  //source 是我要处理的业务代码
  const preStr = this.query.preStr;
  const newStr = this.query.newStr;

  return source.replace(preStr, newStr);
}