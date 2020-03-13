import React, { Component } from 'react'

export default class SyncSendRequest extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    let urls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    let max = 4;
    let callback = () => {
      console.log('并发完成');
    }
    this.sendRequestTwo(urls, max, callback)


  }
  sendRequestOne = (urls, max, callback) => {
    //当前并发数量
    var bfCount = 0;
    var index = 0;
    var handle = (url) => {
      if (!url) return;
      bfCount++;
      console.log(`并发数：${bfCount}，${index}任务开始。`)
      new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(url)
          resolve();
        }, 0);
      }).then(res => {
        bfCount--;
        console.log(`并发数：${bfCount}，${index}任务结束。`)
        handle(urls[index++]);
        if (bfCount == 0) {
          callback();
        }
      })
    }
    var count = 0;
    while (bfCount < max) {
      count++;
      console.log('循环' + count)
      handle(urls[index++]);
    }

  }

  //promiseAll

  sendRequestTwo = (urls, max, callback) => {
    var bfPromiseArr = [];
    let index = 0;
    var getPromise = (url) => {
      if (url) {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log(`当前并发数：${bfPromiseArr.length}，当前任务index：${index}`)
            console.log(url);
            resolve()
          }, 0);
        }).finally((res) => {
          return getPromise(urls[index++])
        })
      }
    }
    while (max--) {
      bfPromiseArr.push(getPromise(urls[index++]))
    }
    Promise.all(bfPromiseArr).then(callback)
  }

  sendResquest(urls, max, callback) {
    let pending_count = 0, //并发数
      idx = 0;//当前请求的位置

    while (pending_count < max) {
      _fetch(urls[idx++])
    }

    async function _fetch(url) {
      if (!url) return;
      pending_count++;
      console.log(url + ':start', '并发数: ' + pending_count);
      await fetch(url)
      pending_count--;
      console.log(url + ':done', '并发数: ' + pending_count);
      _fetch(urls[idx++]);
      pending_count || callback && callback()
    }
  }
  fetch = function (idx) {
    return new Promise(resolve => {
      let timeout = parseInt(Math.random() * 1e4);
      setTimeout(() => {
        resolve(idx)
      }, timeout)
    })
  };

  render() {
    return (
      <div>

      </div>
    )
  }
}
