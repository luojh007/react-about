import React, { Component, useState } from 'react'
import SubOne from '../../components/SubOne'
import PropTypes from 'prop-types'
class SubC extends Component {
  constructor(props) {
    super(props)    
  }
  render() {
    console.log(this.props)
    return <div>
      我是子组件1
      <SubOne/>
    </div>
  }
}
//高阶函数包裹返回高阶组件
function hoc() {
  return (Comp) => {
    return class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          name: '我是要给子组件的属性',
        }
      }
      render() {
        return <Comp {...this.props} data={this.state.name} />
      }
    }
  }
}
//使用
const HeightComponent = hoc()(SubC)

class Hook extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }
  render() {    
    return <HeightComponent />

  }
}

export default Hook