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
      if (key) {
        res = parent[key] = {};
      }
      console.log(res, parent, parent[key])
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
      a: 1,
      b: {
        c: 2
      }
    }
    let clone1 = zClone(obj2);
    let clone2 = zClone(obj2);
    console.log(clone1, clone2)
    clone2.b.c = 222
    clone2.b.d = 22;
    console.log(clone1, clone2)
  }
  render() {
    return (
      <div>

      </div>
    )
  }
}
