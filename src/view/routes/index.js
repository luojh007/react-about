import React, { Component } from 'react'
import { Button } from 'antd'
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.dianji3 = this.dianji3.bind(this);
  }
  componentDidMount(){
  }
  dianji(){
    console.log(this)
  }
  dianji2 = ()=>{
    console.log(this)
  }
  dianji3(){
    console.log(this)
  }
  render() {
    return (
      <div>
        <Button onClick={this.dianji}>非箭头函数不绑定点击</Button>
        <Button onClick={this.dianji2}>箭头函数</Button>
        <Button onClick={this.dianji3}>绑定点击</Button>
      </div>
    )
  }
}
