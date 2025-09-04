import { useEffect, useState, type ChangeEvent } from 'react'

function Ex4() {
    const [name, setName] = useState("");
    useEffect(() => {
        document.title = name
    }, [name])
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    return (
        <div>
            <h2><b>Chao mung den voi trang cua chung toi</b></h2>
            <input
                type="text"
                placeholder='Nhap ten cua ban'
                value={name}
                onChange={handleChange}
            />
            <p>Tieu de cua trang se thay doi theo ten ban nhap</p>
        </div>
    )
}

export default Ex4
