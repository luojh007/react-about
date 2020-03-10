import React, { Component } from 'react'
class TestPromise {
  constructor(fn) {
    this.value = undefined;
    this.status = 'padding';
    this.rejectFnArr = [];
    this.resolveFnArr = [];
    let resolve = (data) => {
      this.value = data;
      this.status = 'resolved'
      this.resolveFnArr.forEach(fn => fn());
    }
    let reject = (data) => {
      this.value = data;
      this.status = 'rejected';
      this.rejectFnArr.forEach(fn => fn());
    }
    fn(resolve, reject);
  }
  then(resolveFn, rejectFn) {
    resolveFn = resolveFn ? resolveFn : (data) => data
    rejectFn = rejectFn ? rejectFn : (err) => { throw err }
    //可选参数
    let promise = new TestPromise((resolve, reject) => {
      let x;
      if (this.status == 'rejected') {
        x = rejectFn(this.value)
        resolvePromise(promise, x, reject);
      }
      if (this.status == 'resolved') {
        x = resolveFn(this.value)
        resolvePromise(promise, x, resolve);
      }
      if (this.status == 'padding') {
        setTimeout(() => {
          this.rejectFnArr.push(() => {
            x = rejectFn(this.value)
            resolvePromise(promise, x, reject)
          });
        }, 0)
        setTimeout(() => {
          this.resolveFnArr.push(() => {
            x = resolveFn(this.value);
            resolvePromise(promise, x, resolve);
          })
        }, 0)
      }
    });

    return promise;
  }
}
function resolvePromise(promise, x, resolve, reject) {
  if (promise === x) {
    return reject(new TypeError('不能是不一个对象'))
  }
  if (typeof x === 'object' && x != null || typeof x == 'function') {
    let then = x.then;
    then.call(x, r => resolve(r), q => reject(q))
  } else {
    resolve(x);
  }
}
export default class MyPromise extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    let myPromise = new TestPromise((resolve, reject) => {
      setTimeout(() => {
        resolve('异步函数')
      }, 1000)
    }).then((res) => {
      console.log(res)
      return new Promise((resolve) => {
        resolve('回调函数 返回一个promise对象')
      }).then((res) => {
        console.log(res);
        return '第二个回调函数返回值'
      })
    }).then((a) => {
      console.log(a)
    })
  }
  render() {
    return (
      <div>

      </div>
    )
  }
}
