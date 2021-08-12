import React from 'react'
import Mouse from '../../components/renderProps/Mouse'
export default class MyComp extends React.Component {
    render () {
        return <Mouse render={({ X, Y }) => <SubComp mouse={{ X, Y }} />}>
        </Mouse>
    }
}

class SubComp extends React.PureComponent {
    render () {
        const { mouse } = this.props
        return <div>
            我是子组件：现在鼠标的坐标是：{mouse.X},{mouse.Y}
        </div>
    }
}