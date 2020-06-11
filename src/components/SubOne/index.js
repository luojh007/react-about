import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Index extends Component {
  render() {
    console.log(this)
    return (
      <div>
        
      </div>
    )
  }
}
Index.contextTypes = {
  router: PropTypes.object
}

export default Index
