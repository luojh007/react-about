import React, { useRef } from 'react'
import useMouse from '../../hooks/useMouse'
export default function SubComp () {
    const mouseDom = useRef(null)
    
    const { X, Y } = useMouse(mouseDom)

    return <div style={{ width: 500, height: 500 }} ref={mouseDom}>
        当前鼠标的位置是：{X},{Y}
    </div>
}
