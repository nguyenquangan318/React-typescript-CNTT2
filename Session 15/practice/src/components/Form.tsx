import { Component } from 'react'

interface StateType {
    name: string;
    email: string
}

export default class Form extends Component<{}, StateType> {
    constructor(props: {}) {
        super(props)
        this.state = {
            name: "test",
            email: ""
        }
    }
    submitForm = (event: React.FormEvent) => {
        event.preventDefault()
        console.log(this.state);

    }
    handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <form action="" onSubmit={this.submitForm}>
                <label htmlFor="">Họ và tên:</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleInput} />
                <br />
                <label htmlFor="">Email:</label>
                <input type="email" name="email" value={this.state.email} onChange={this.handleInput} />
                <br />
                <button type='submit'>submit</button>
            </form>
        )
    }
}
