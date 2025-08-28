import { useState } from "react"

interface propsType {
    name: string
    age: number
}



export default function FuntionalComponent({ name, age }: propsType) {
    const [count, setCount] = useState(0)
    const [check, setCheck] = useState(false)

    function handleClick() {
        console.log(count);
        setCount(count + 1)
    }
    return (
        <>
            <div onClick={handleClick}>FuntionalComponent</div>
            <p> Hello, {name}</p>
        </>
    )
}
