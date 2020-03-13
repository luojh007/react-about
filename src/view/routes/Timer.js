import React, { Component } from 'react'

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
    var startTime = new Date().getTime();
    var count = 0;
    //耗时任务
    setInterval(function () {
      var i = 0;
      while (i++ < 100000000);
    }, 0);

    var handle = function () {
      count++;
      var wc = new Date().getTime() - startTime - count * 1000;
      var fixedTime = 1000 - wc;
      //误差超过时间间隔（1秒），置0；
      if (fixedTime < 0) {
        fixedTime = 0
      }
      console.log(count, 'wc是：' + wc)
      if (count == 10) return;
      setTimeout(handle, fixedTime)
    }
    setTimeout(handle, 1000);
  }
  render() {
    return (
      <div>

      </div>
    )
  }
}
