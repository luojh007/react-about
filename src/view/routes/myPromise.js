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

//封装一个
//实现等待一个异步请求，成功最小等待时间min，最长等待时间max
function minMaxWait(promise, min, max) {
  var startTime = new Date().getTime();
  return new Promise((resolve, reject) => {
    var t = setTimeout(() => {
      reject('超时错误');
    }, max)
    promise.then((res, rej) => {
      let nowTime = new Date().getTime();
      if (nowTime - startTime < min) {
        setTimeout(() => {
          clearTimeout(t)
          resolve('min后返回' + res);
        }, min - (nowTime - startTime))
      }
      else {
        clearTimeout(t)
        resolve('min~max返回：' + res)
      }
    }).catch(res => {
      reject(res)
    })
  })
}
async function foo() {
  console.log('start');
  const response = await minMaxWait(
    new Promise((res, rej) => { setTimeout(() => { console.log('异步方法'); res('返回数据'); }, 4000) }),
    3000, 5000);
  console.log(response);
}
foo()


// function minMaxWait(fn, min, max) {
//   let timeout = null;
//   let response = false;
//   return new Promise((resove, reject) => {
//     timeout = setTimeout(() => {
//       fn = null;
//       reject('超时啦，我没有执行');
//     }, max);

//     setTimeout(() => {
//       if (response) {
//         clearTimeout(timeout);
//         resove('请求成功啦，我是在最小间隔后执行的');
//       } else {
//         //会执行超时任务
//       }
//     }, min);
//     fn.then(res => {
//       response = true;

//     })
//     // resove
//     console.log('请求成功啦，我是立即执行的，返回了response');
//   });
// }

// var foo = async function () {
//   console.log('start');
//   var res = await minMaxWait(
//     new Promise(resove => setTimeout(resove, 100)),
//     3000,
//     5000
//   );
//   console.log(res);
// };
// foo();



export default class MyPromise extends Component {
  constructor(props) {
    super(props)
    let promise = new Promise((res, rej) => {
      setTimeout(() => {
        res();
      }, 100)
    });

  }
  componentDidMount() {
  }
  render() {
    return (
      <div>

      </div>
    )
  }
}
