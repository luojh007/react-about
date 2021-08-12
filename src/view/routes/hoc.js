import React from 'react'
import withMouse from '../../components/withMouse'
class SubCpmp extends React.Component {
    constructor() {
        super()
    }
    render () {
        const { mouse } = this.props
        return <div>
            鼠标坐标是：{mouse.x} , {mouse.y}
        </div>
    }
}
export default withMouse(SubCpmp)
