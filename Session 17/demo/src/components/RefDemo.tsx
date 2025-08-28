import React, { useRef } from 'react'

export default function RefDemo() {
    const myRef = useRef(null)
    const renderRef = useRef(0)
    renderRef.current++;
    return (
        <div>RefDemo
            <p ref={myRef}>Đây là thẻ dùng ref</p>
        </div>
    )
}
