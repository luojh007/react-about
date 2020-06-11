import React, { Component } from 'react'
import { Button } from 'antd';

class SubClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    }
  }
  componentDidMount(){
    console.log('子组件挂载完成')
  }
  render() {
    console.log('子组件渲染');
    return <div>
      我是子组件：父组件传的值是：{this.state.data}
    </div>
  }
}

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      syncCount: 0,
      asyncCount: 0,
    }

  }
  static getDerivedStateFromProps(nextProps, preState) {
    console.log('getDerivedStateFromProps')
    return {
      ljh: 1
    }
  }
  changeView = () => {
    this.setState({ view: 'view' })
  }
  changeState = () => {
    this.setState({ data: '1' })
  }

  componentDidMount() {
    console.log('componentDidMount');
  }
  shouldComponentUpdate() {
    console.log('是否更新');
    return true
  }
  componentWillUpdate() {
    console.log('将要更新')
  }
  getSnapshotBeforeUpdate() {
    console.log('返回更新参数')
    return '返回的更新参数'
  }
  componentDidUpdate(perProps, preState, extraParams) {
    console.log('已经更新，额外的更新参数：' + extraParams + '')
  }
  asyncUpState = () => {
    this.setState({ asyncCount: this.state.asyncCount + 1 })
    this.setState({ asyncCount: this.state.asyncCount + 1 })
    this.setState({ asyncCount: this.state.asyncCount + 1 })
  }
  syncUpState = () => {
    setTimeout(() => {
      this.setState({ syncCount: this.state.syncCount + 1 })
      this.setState({ syncCount: this.state.syncCount + 1 })
      this.setState({ syncCount: this.state.syncCount + 1 })
    }, 100)
  }
  render() {
    const { view, data, syncCount, asyncCount } = this.state
    console.log('render')
    return (
      <div>
        <div>
          <Button onClick={this.changeView}>改变视图</Button>
          <Button onClick={this.changeState}>改变state</Button>
          <div>{view}</div>
        </div>yibu
        <div>
          <Button onClick={this.asyncUpState}>react包装的事件执行</Button>
          <Button onClick={this.syncUpState}>非react包装的事件执行</Button>
          <div>非react包装的事件处理同步{syncCount}</div>
          <div>react包装的事件处理异步{asyncCount}</div>
        </div>

        <SubClass data='父组件传值' />
      </div>
    )
  }
}
//每次setState都会触发重绘（shouldUp,willUp,rend,didUp）