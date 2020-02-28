import React, { Component } from 'react'
var obj = require('../../../components/ImportAndRequire/exportRequire')
export default class Require extends Component {
  constructor(props) {
    super(props)
    console.log('原始的obj：' + JSON.stringify(obj))
  }
  componentDidMount() {
    setTimeout(() => {
      console.log('原始值（++）修改之后，引用的obj：' + JSON.stringify(obj))
    }, 500)
  }
  render() {

    return (
      <div>
        运行时加载，只有在运行这段代码时，才会将整个模块加载进来。
      </div>
    )
  }
}
