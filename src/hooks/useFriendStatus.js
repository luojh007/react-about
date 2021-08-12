/**
 * 异步的钩子-状态的订阅
 */
import { useEffect, useState } from 'react'
export default function useFriendStatus (friendId) {
    const [isOnline, setIsOnline] = useState(null)
    useEffect(() => {
        setIsOnline(null)
        setTimeout(() => {
            setIsOnline(friendId > 0)
        },400)
    }, [friendId])
    return isOnline
}