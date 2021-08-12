import React from "react"
export default class Mouse extends React.Component {
    constructor() {
        super()
        this.state = {
            X: 0,
            Y: 0
        }
    }
    mouseMove = (e) => {
        this.setState({
            X: e.clientX,
            Y: e.clientY
        })
    }
    render () {
        return <div style={{ width: 500, height: 500 }} onMouseMove={this.mouseMove}>
            {this.props.render(this.state)}
        </div>
    }
}