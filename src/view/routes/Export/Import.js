import React, { Component } from 'react'
import { obj } from '../../../components/ImportAndRequire/exportImport'
export default class Import extends Component {
  constructor(props) {
    super(props);
    console.log('原始obj：' + JSON.stringify(obj))
  }
  componentDidMount() {
    setTimeout(() => {
      console.log('原始值（++）修改之后，引用的obj：' + JSON.stringify(obj))
    }, 400)
  }
  render() {
    return (
      <div>
        编译时加载，只加载需要的模块。
      </div>
    )
  }
}
