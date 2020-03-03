import React, { Component } from 'react'
import { Button, Input } from 'antd';
class myPromise {
  constructor(fn) {
    if (typeof fn !== 'function') {
      throw TypeError('myPromise的参数必须是函数');
    }
    this.status = 'padding';
    this.data = undefined;
    this.resolveCBArr = [];   //储存成功回调函数
    this.rejectCBArr = [];    //储存失败回调函数

    let resolve = (data) => {
      this.status = 'resolved';
      this.data = data;
      this.resolveCBArr.forEach(fn => fn());
    }

    let reject = (data) => {
      this.status = 'rejected'
      this.data = data;
      this.rejectCBArr.forEach(fn => fn());
    }
    fn(resolve, reject);
  }
  then(resolveFn, rejectFn) {
    let promise2 = new Promise((resolve, reject) => {
      let x;
      if (this.status == 'resolved') {
        x = resolveFn(this.value);
        this.resolvePromise(promise2, x, resolve, reject)
      } else if (this.status == 'rejected') {
        x = rejectFn(this.value);
        this.resolvePromise(promise2, x, resolve, reject)
      }
      else if (this.status == 'padding') {
        this.resolveCBArr.push(() => {
          x = resolveFn(this.value);
          this.resolvePromise(promise2, x, resolve, reject)
        });
        this.rejectCBArr.push(() => {
          x = rejectFn(this.value);
          this.resolvePromise(promise2, x, resolve, reject)
        });
      }
      return promise2;
    })
  }

}
//判断回调函数执行之后是什么值，promise就继续执行then，否则向下传递
const resolvePromise = (promise2, x, resolve, reject) => {
  if (promise2 === x) {
    return reject(new TypeError('不能是同一个promise'));
  }
  if (typeof x === 'object' && x != null && typeof x == 'function') {
    try {
      let then = x.then;
      //x是promise
      if (typeof then == 'function') {
        then.call(x, y => resolve(y), r => reject(r))
      } else {
        resolve(x)
      }
    } catch (error) {
      reject(err)
    }
  } else {
    resolve(x);
  }
}
export default class PromiseAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    this.setColor();
  }
  setColor = () => {
    //宏任务-渲染-微任务   颜色切换
    this.setState({ color: 'blue' });
    setTimeout(() => {
      this.setState({ color: 'white' })
    }, 0)
  }
  HWOne = () => {
    setTimeout(() => { console.log(4) });
    new Promise(resolve => {
      resolve();
      console.log(1);
    }).then(() => {
      console.log(3)
    })
    console.log(2)
  }
  HWTwo = () => {
    setTimeout(() => console.log(4))
    new Promise(resolve => {
      console.log(1)
      resolve()
    }).then(() => {
      new Promise(resolve => {
        console.log(3)
        resolve();
      }).then(() => {
        console.log(5)
      })
    })
    console.log(2);
  }
  asyncImageLoad = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url
      img.onload = function () {
        resolve(url);
      }
      img.onerror = function () {
        reject(new Error(`不能加载地址为：${url}的图片`));
      }
    })
  }
  loadImage = () => {
    const { imgUrl } = this.state;
    this.asyncImageLoad(imgUrl).then((res) => {
      this.setState({ imageSource: res })
    }).catch(err => {
      console.log(err)
    })
  }
  render() {
    const { color, imageSource } = this.state;
    return (
      <div >
        <div>
          <Button style={{ background: color }}>宏任务-渲染-微任务   颜色切换</Button>

          <Button onClick={this.HWOne}>微任务，宏任务测试1</Button>

          <Button onClick={this.HWTwo}>微任务，宏任务测试2</Button>
        </div>

        <div>
          图片异步加载
          <Input placeholde='图片地址' style={{ width: 200 }} onChange={(e) => this.setState({ imgUrl: e.target.value })} />
          <Button onClick={this.loadImage}>生成</Button>
          <img src={imageSource} />
        </div>
      </div>
    )
  }
}

let p1 = new Promise((resolve, reject) => {
  resolve(111)
}).then((res) => {
  return new Promise((resolve, reject) => {
    resolve(res);
  }).then(res => console.log(res));
}).then((res) => {
  console.log(res);
})