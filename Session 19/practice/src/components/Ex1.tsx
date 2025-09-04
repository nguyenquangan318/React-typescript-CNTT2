import {useState} from 'react'

export default function Ex1() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
        <h2>Kiểm tra độ dài chuỗi nhập vào</h2>
        <input type="text" id="" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Nhập vào đây'/>
        {inputValue.length > 5 && <p style={{color:"red"}}>Chuỗi nhập vào dài hơn 5 kí tự</p>}
    </div>
  )
}
