import React, { Component } from 'react'
//快排分区
function part(arr, left, right) {
  let pivot = left;
  let index = pivot + 1;
  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index)
      index++;
    }
  }
  swap(arr, pivot, index - 1)
  return index - 1;
}
//交换位置，直接改变入参
function swap(arr, i, j) { 
  let tmp = arr[i]
  arr[i] = arr[j];
  arr[j] = tmp;
}
//快速
function quickSort(data, left, right) {
  left = typeof left == 'number' ? left : 0;
  right = typeof right == 'number' ? right : data.length - 1;
  let pivot = 0
  if (left < right) {
    pivot = part(data, left, right);
    quickSort(data, left, pivot - 1)
    quickSort(data, pivot + 1, right);
  }
}
var data = [6, 1, 3, 7, 2, 5, 4];
quickSort(data)
console.log(data)
export default class Sort extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var data = [6, 1, 3, 7, 2, 5, 4];
    // this.bubbleSort(data);
    // this.quickSort(data);
    // console.log(data);
  }
  //冒泡
  bubbleSort(data) {
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data.length - i; j++) {
        if (data[j + 1] < data[j]) {
          let tmp = data[j + 1];
          data[j + 1] = data[j];
          data[j] = tmp;
        }
      }
    }
    return data;
  }
  //选择
  selectSort(data) {
    for (let i = 0; i < data.length; i++) {
      //最小值
      let minIndex = i;
      for (let j = i + 1; j < data.length; j++) {
        if (data[j] > data[minIndex]) {
          minIndex = j;
        }
      }
      let tmp = data[i];
      data[i] = data[minIndex]
      data[minIndex] = tmp;
    }
  }
  //插入
  insertSort(data) {
    for (let i = 0; i < data.length - 1; i++) {
      let tmp = data[i + 1];
      let preIndex = i;
      //一直比data[preIndex]小，一直往前移动。
      while (preIndex >= 0 && tmp < data[preIndex]) {
        data[preIndex + 1] = data[preIndex]
        preIndex--;
      }
      //最后插入
      data[preIndex + 1] = tmp;
    }
  }

  //归并排序（分而治之，递归排序）
  mergeSort(data = []) {
    //子集的最小约束条件
    if (data.length < 2) return;
    let mid = data.length / 2;
    let leftArr = data.slice(0, mid);
    let rightArr = data.slice(mid, data.length);
    return this.merge(this.mergeSort(leftArr), this.mergeSort(rightArr));
  }
  merge(leftArr, rightArr, ) {
    let length = leftArr.length + rightArr.length;
    let result = [];
    let i = 0;
    let j = 0;
    for (let i = 0; i < length; i++) {
      if (i > leftArr.length) {
        result[i] = rightArr[j++];
      } else if (j > rightArr.length) {
        result[i] = leftArr[i++];
      } else if (leftArr[i] > rightArr[j]) {
        result[i] = rightArr[j++];
      } else {
        result[i] = leftArr[i++]
      }
    }
  }



  render() {
    return (
      <div>
        排序算法
      </div>
    )
  }
}
