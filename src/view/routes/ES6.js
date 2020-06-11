import React, { Component } from 'react'

function fn() {
  for (let i = 0; i < 2; i++) {

  }
  console.log(i);
}

var PASSWORD = Symbol();
let ljh = {
  [PASSWORD]: 111,
  name: ljh,
  [Symbol('PASSWORDAGAIN')]: 222
}

let p1 = new Promise((res)=>{
  setTimeout(()=>{
    res(1);
  },100)
})
let p2 = new Promise((res,rej)=>{
  setTimeout(()=>{
    // res(2);
    rej('err')
  },300)
})
let p3 = new Promise((res)=>{
  setTimeout(()=>{
    res(3);
  },500)
})
Promise.all([p1,p2,p3]).then(res=>{
  console.log(res);
})
export default class ES6 extends Component {
  render() {
    return (
      <div onClick={(e)=>{console.log(e)}}>
        <div>点击我1</div>
        <div>点击我2</div>
        <div>点击我3</div>
      </div>
    )
  }
}
