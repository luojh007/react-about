import React, { Component } from 'react'
// import { curry } from 'lodash'
// var curry = require('lodash').curry;
// 柯里化具体实现
function curry(fn, ) {
  let _this = this;
  //  缓存参数
  let _args = [];
  var length = fn.length;
  var handle = function () {
    // 合并参数
    var arg = [].slice.call(arguments);
    _args = arg.concat(..._args);
    if (length > _args.length) {
      return handle
    } else {
      // 合并全部参数之后执行fn
      return fn.apply(_this, _args);
    }
  }
  return handle
}
// compose具体实现
// 实现一
function compose(...args) {
  // 合并函数的数量
  let count = args.length;
  let index = count - 1;
  let _this = this;
  return function handle(...arg1) {
    let result = args[index].apply(_this, arg1);
    index--;
    if (index < 0) {
      return result;
    } else {
      return handle.call(_this, result);
    }
  }
}
// 分割空格-函数是编程练习
var split = curry((str, splitStr) => str.split(splitStr))
var splitSpace = split(' ');
var reduce = curry((arr, fn) => arr.reduce(fn,[]))
var resvert = reduce((a, b) => [b].concat(a))
var getSplitOne = compose(resvert, splitSpace)

console.log(getSplitOne('as sd as das a'));

export default class Curry extends Component {
  render() {
    return (
      <div>
        函数柯里化
      </div>
    )
  }
}
