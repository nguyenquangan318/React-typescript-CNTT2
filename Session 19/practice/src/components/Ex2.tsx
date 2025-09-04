import React, { useState } from 'react'

export default function Ex2() {
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[submit, setSubmit] = useState(false)
    const handleSubmit = (event: React.FormEvent) =>{
        event.preventDefault()
        setSubmit(true)
    }
  return (
    <div>
        <h1>thong tin nguoi dung</h1>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Nhap ten:</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <label htmlFor="">Nhap email:</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <button type='submit'>Gui</button>
        </form>
        {submit && (
            <div>
                <p>Ten: {name}</p>
                <p>Email: {email}</p>
            </div>
        )}
    </div>
  )
}
