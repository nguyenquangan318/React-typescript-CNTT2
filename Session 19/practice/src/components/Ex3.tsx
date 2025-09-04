import { useEffect, useState } from 'react'

export default function Ex3() {
    const [number, setNumber] = useState(0)
    useEffect(() => {
        console.log("Component da duoc render lan dau");
    }, [])
    const click = () => {
        setNumber(number + 1)
    }
    return (
        <div>
            <h1 onClick={click}>Chao mung ban den voi ung dung cua chung toi</h1>
        </div>
    )
}
