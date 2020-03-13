import React, { Component } from 'react'

export default class Sort extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    Array.prototype.mySort = function (fn) {
      let arr = this;
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
          if (fn(arr[j], arr[j + 1]) < 0) {
            let tmp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;
          }
        }
      }
    }
    var arr = [1, 2, 3]
    arr.mySort(() => 1)
  }
  render() {
    return (
      <div>

      </div>
    )
  }
}
