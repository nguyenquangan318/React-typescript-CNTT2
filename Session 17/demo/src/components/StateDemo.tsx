import { useEffect, useState } from 'react'

function StateDemo() {
    const [count, setCount] = useState(0)
    // const [name, setName] = useState('')
    const handleIncrease = () => {
        setCount(count + 1)
    }
    useEffect(() => {
        console.log("Effect được chạy");
    })
    return (
        <>
            <h1>State demo</h1>
            <p>{count}</p>
            <button onClick={handleIncrease}>Increase</button>
        </>
    )
}

export default StateDemo