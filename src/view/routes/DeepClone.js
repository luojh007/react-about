import React, { Component } from 'react'
//递归思想
function dClone(oldObj) {
  //如果是数组或者对象
  if (typeof oldObj == 'object') {
    var newObj = oldObj instanceof Array ? [] : {};
    for (let key in oldObj) {
      newObj[key] = dClone(oldObj[key]);
    }
    return newObj;
  } else {
    return oldObj
  }
}
//栈替代，构造数据结构；以结构代替复杂度。
function zClone(oldObj) {
  var root = {};
  if (typeof oldObj === 'object') {
    const loopList = [{
      data: oldObj,
      key: undefined,
      parent: root,
    }];
    while (loopList.length) {
      var node = loopList.pop();
      var data = node.data;
      var key = node.key;
      var parent = node.parent;
      var res = parent;
      if (key !== undefined) {
        res = parent[key] = (parent[key] instanceof Array) ? [] : {};
      }
      for (let i in data) {
        if (typeof data[i] === 'object') {
          loopList.push({
            data: data[i],
            key: i,
            parent: res,
          })
        } else {
          res[i] = data[i];
        }
      }
    }
    return root
  }
  else {
    return oldObj
  }
}
let arr = [1, [2, 3, 4, [55]]]

function flat(arr) {
  let res = [];
  let fn = function (subArr) {
    for (let it of subArr) {
      if (it instanceof Array) {
        fn(it);
      } else {
        res.push(it);
      }
    }
  }
  fn(arr);
  return res;
}
console.log(flat(arr));

export default class DeepClone extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    let obj1 = {
      a: 1,
      b: 2
    }
    let obj2 = {
      b: {
        c: 2
      },
      a: {
        e: {
          q: 1
        },
        f: {
          w: 2
        }
      },

    }
    // let clone1 = zClone(obj1);
    // let clone2 = zClone(obj2);
    // clone2.b.c = 222
    // clone2.b.d = 22;
    // console.log(clone1)

    // console.log(obj1, obj2)
  }
  render() {
    return (
      <div>

      </div>
    )
  }
}


function deepClone(data) {
  if (typeof data != 'object') { return data }
  let root = {};
  let loop = [
    {
      data: data,
      parent: root,
      key: undefined
    }
  ]
  while (loop.length) {
    let node = loop.pop();
    let parent = node.parent;
    let data = node.data;
    let key = node.key;  //在父元素中的key
    //跟节点
    let res = parent;
    if (key !== undefined) {
      res = parent[key] = {};
    }
    for (let i in data) {
      if (typeof data[i] === 'object') {
        loop.push({
          data: data[i],
          parent: res,
          key: i
        })
      } else {
        res[i] = data[i];
      }
    }
  }
  return root;
}