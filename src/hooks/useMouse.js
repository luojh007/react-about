import { useState, useEffect } from 'react'

export default function useMouse (mouseDom) {
    const [mouse, setMouse] = useState({ X: 0, Y: 0 })
    const handle = (e) => {
        setMouse({
            X: e.clientX,
            Y: e.clientY
        })
    }
    useEffect(() => {
        mouseDom.current.addEventListener('mousemove', handle)
        return () => mouseDom.current.removeEventListener('mousemove', handle)
    })
    return mouse
}