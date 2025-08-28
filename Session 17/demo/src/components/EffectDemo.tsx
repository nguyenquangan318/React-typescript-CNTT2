import { useEffect } from 'react'

function EffectDemo() {
    useEffect(() => {
        console.log("Effect được chạy");
        return ()=>{
        }
    })
    return (
        <div>EffectDemo</div>
    )
}

export default EffectDemo