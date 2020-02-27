import React, { Component } from 'react'
const oldTree = [
  {
    name: 'r',
    child: [{
      name: 'a',
      child: [{
        name: 'b',
        text: '我是b'
      }, {
        name: 'c',
        text: '我是c'
      }]
    }, {
      name: 'd',
    }]
  },
]
const newTree = [
  {
    name: 'r',
    child: [{
      name: 'd',
      child: [{
        name: 'a',
        child: [{
          name: 'b',
          text: '我是b'
        }, {
          name: 'c',
          text: '我是c'
        }]
      }]
    }]
  },
]
//类型比较 
function patch(oldVnode, vnode) {
  //同一类型
  if (sameNode(oldVnode, vnode)) {
    patchNode(oldVnode, vnode)
  } else {
    //非同一类型，直接删除老的，创建新增新的
  }
}
//组件比较
function patchNode(oldVnode, vnode) {
  if (oldVnode.text && vnode.text && oldVnode.text != vnode.text) {
    //如果都有text值，则将新的text值赋值给老的
  } else {
    //否则新老更新。
    if (oldVnode.child && vnode.child && oldVnode.child != vnode.child) {
      //如果新老节点都存在子元素，并且不相等，那就比较更新其子元素
      updateChildren(oldVnode, vnode);
    } else if (!oldVnode.child) {
      //如果老节点不存在，新节点存在，创建新增
    } else if (!vnode.child) {
      //如果新节点不存在，老节点存在，那就移除
    }
  }
}

//最为核心都比较更新算法，相当于传进来两个数组，关键在于key索引
function updateChildren(vnode, oldVnode) {
  //构造数据结构
  let oldStartIndex = 0;
  let oldEndIndex = oldVnode.length - 1;
  let newStartIndex = 0;
  let newEndIndex = vnode.length - 1;

  let oldStartVnode = oldVnode[0];
  let oldEndVnode = oldVnode[oldEndIndex];
  let newStartVnode = vnode[0];
  let newEndVnode = vnode[newEndIndex];

  //新老头头相同，一起后移
  if (oldStartVnode == newStartVnode) {
    patchNode(oldStartVnode,newStartVnode)
    oldStartVnode = oldVnode[++oldStartIndex];
    newStartVnode = vnode[++newStartIndex];
  }
  //新老尾尾相同，一起前移
  else if (oldEndVnode == newEndVnode) {
    patchNode(oldEndVnode,newEndVnode);
    oldEndVnode = oldVnode[--oldEndIndex];
    newEndVnode = vnode[--newEndIndex];
  }
  //新头和老尾相同
  else if(oldEndVnode == newStartVnode){
    patchNode(oldEndVnode,newStartVnode);
    //老尾移动到老头之前
    oldEndVnode = oldVnode[--oldEndIndex];
    newStartVnode = vnode[++newStartIndex]
  }
  //新尾和老头相同....同上


  //精髓在于新老头尾全部都不相同，则取新头的key，到老节点数组生成到mapkey中找到相同的key，并找到对一个的老节点。
  //进行比较
  //相同则将此老节点插入老头前
  //不同则将此节点创建新增老头前



  //最后   老头>老尾，新增全部新节点
  //      新头>新尾，删除全部老节点
}
export default class Diff extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div id='ljh'>
        <span id='aaa'>
          sssss

        </span>
        <img src='https://upload-images.jianshu.io/upload_images/14512370-0dd50bc3cee4237e.png?imageMogr2/auto-orient/strip|imageView2/2/w/533/format/webp' />
      </div>
    )
  }
}
