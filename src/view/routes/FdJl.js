
import React, { Component } from 'react'

Function.prototype.mybind = function (context) {
  let self = this;
  let args = [].slice.call(arguments);
  return function () {
    self.apply(context, args.connect([].slice.call(arguments)))
  }
}

//300毫秒之内，重复触发，重新计时（非立即执行）
function fd(fn, time) {
  let timer = null;
  return function () {
    let context = this;
    let arg = arguments;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, arg)
    }, time)
  }
}
//立即执行
// function fdNow(fn, time) {
//   let timer;
//   return function () {
//     let self = this;
//     let arg = arguments;
//     if (timer) clearTimeout(timer);
//     let callNow = !timer
//     timer = setTimeout(() => {
//       timer = null
//     }, time)

//     if (callNow) fn.call(self, arg)
//   }
// }
function fdNow(fn, time) {
  let tag = true;
  let timer;
  return function () {
    let self = this;
    let arg = arguments;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      tag = true;
    }, time)

    if (tag) { fn.call(self, arg); tag = false };
  }
}
var count = 1;
function fn(e) {
  console.log(e)
  console.log(count++)
}
function click() {
  let a = 0;
  return function () {
    a++;
    console.log(a)
  }
}
export default class TransactionAbout extends Component {
  render() {
    return (
      <div>
        暂无
        <div onMouseMove={fdNow(fn, 500)} style={{ width: 300, height: 300, background: 'red' }}>滑我</div>
        <button onClick={click()}>点我</button>
      </div>
    )
  }
}
