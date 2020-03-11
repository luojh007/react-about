import React, { Component } from 'react'
import { Button, message } from 'antd'
Function.prototype._bind = function (context) {
  var self = this   //原函数
  console.log(self)
  var args = [].slice.call(arguments)  //参数
  return function () {
    self.apply(context, args.concat([].slice.call(arguments)))
  }
}
function func(x) {  
  console.log(x, this.y)
}

func._bind({ y: 'foo' })() //undefined "foo"
// func._bind()() //undefined undefined
func._bind({ y: 'bar' }, 'foo')() //"foo" "bar"
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thisStr: ''
    }
    this.dianji3 = this.dianji3.bind(this);
  }
  componentDidMount() {

  }
  dianji() {
    document.getElementById('thisStr').innerHTML = this
  }
  dianji2 = () => {
    document.getElementById('thisStr').innerHTML = this
  }
  dianji3() {
    document.getElementById('thisStr').innerHTML = this
  }
  render() {
    return (
      <div>
        <Button onClick={this.dianji}>非箭头函数不绑定</Button>
        <Button onClick={this.dianji2}>箭头函数</Button>
        <Button onClick={this.dianji3}>绑定</Button>
        llllllll
        <div >this 是：<span id='thisStr'></span></div>
      </div>
    )
  }
}
