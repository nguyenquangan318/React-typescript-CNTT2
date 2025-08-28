import React, { Component } from 'react'

//B1: Xay dung giao dien
//B2: Xay dung ham de lay gia tri nguoi dung nhap
interface State {
  name: string;
  email: string;
  age: number;
  error: string
}
//B3: Xay dung ham de gui form (validate du lieu)
//B4: cap nhat giao dien theo cac gia tri duoc luu
export default class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
      name: '',
      email: '',
      age: 0,
      error: ''
    }
  }
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    this.setState({
      ...this.state,
      [name]: value
    })
  }
  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const { email, age } = this.state
    if (!email.includes('@')) {
      this.setState({
        error: 'Email không hợp lệ'
      })
    } else if (age < 0) {
      this.setState({
        error: 'Tuổi không được âm'
      })
    } else {
      this.setState({
        error: ''
      })
    }
  }
  render() {
    const { name, age, email, error } = this.state
    return (
      <>
        <form action="" onSubmit={this.handleSubmit}>
          <h1>Nhập thông tin người dùng </h1>
          <input type="text" name='name' placeholder='Họ tên' onChange={this.handleChange} /><br />
          <input type="text" name='email' placeholder='Email' onChange={this.handleChange} /><br />
          <input type="number" name='age' placeholder='Tuổi' onChange={this.handleChange} /><br />
          <button type='submit'>Gửi</button>
          <button>Xóa</button>
        </form>
        {this.state.error &&
          <p style={{ color: "red" }}>{this.state.error}</p>
        }
        {
          name && age && email && !error &&
          <div>
            <h2>Thông tin đã nhập:</h2>
            <p>Họ tên: {name}</p>
            <p>Email: {email}</p>
            <p>Tuổi: {age}</p>
          </div>
        }
      </>
    )
  }
}
