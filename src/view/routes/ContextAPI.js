import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd';

class ContextAPI extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <Button onClick={() => {
          this.props.dispatch({
            type: 'aa',
            data: 11
          })
        }}>redux发起dispatch</Button>
        <Button onClick={() => {
          this.props.globalContext.dispatch({
            type: 'UPDATE_THEME',
            theme: 'ljh'
          })
        }}>
          ContextAPI发起到dispatch
        </Button>
      </div>
    )
  }
}
//  将state映射到Counter组件的props
function mapStateToProps(state) {
  return { a: state }
}
//  将action映射到Counter组件的props
function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContextAPI)