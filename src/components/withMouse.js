import React from 'react'
export default function withHoc (WrappedComp) {
    return class extends React.Component {
        constructor() {
            super()
            this.state = {
                x: null,
                y: null
            }
        }
        mouseMove = (e) => {
            this.setState({
                x: e.clientX,
                y: e.clientY
            })
        }

        render () {
            return <div style={{ width: 500, height: 500 }} onMouseMove={this.mouseMove}>
                <WrappedComp mouse={{ x: this.state.x, y: this.state.y }} />
            </div>
        }
    }
}