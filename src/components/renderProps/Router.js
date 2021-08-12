import React from 'react'

export default class Router extends React.Component {
    constructor() {
        super()
    }
    render () {
        return <div>
            <div>我是你爹</div>
            {this.props.children}
        </div>
    }
}