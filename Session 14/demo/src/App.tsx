import { Component } from 'react'

interface StateType {
  name: string;
  email: string
}

export default class App extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props)
    this.state = {
      name: "test",
      email: ""
    }
  }
  submitForm = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("submit");
  }
  handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target
    this.setState({
      ...this.state,
      [name]: value
    })
  }
  render() {
    return (
      <form onSubmit={this.submitForm}>
        <input type="text" name="name" value={this.state.name} placeholder='name' onChange={this.handleInput} />
        <input type="email" name="email" value={this.state.email} placeholder='email' onChange={this.handleInput}/>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}
