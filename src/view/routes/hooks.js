import React, { useState, useEffect } from 'react'
import { Select, Spin } from 'antd'
import useFriendStatus from '../../hooks/useFriendStatus'
export default function Hooks () {
    const [firend, setFriend] = useState()

    const isOnline = useFriendStatus(firend)
    return <div style={{ display: 'flex' }}>
        <Select style={{ width: 200 }} onChange={setFriend}>
            <Select.Option key={1}>第一个朋友</Select.Option>
            <Select.Option key={-1}>第二个朋友</Select.Option>
            <Select.Option key={2}>第三个朋友</Select.Option>
        </Select>

        <Spin spinning={isOnline === null}>
            {isOnline > 0 ? 'online' : 'offline'}
        </Spin>
    </div>
}