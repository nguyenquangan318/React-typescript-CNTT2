import { Component } from 'react'

interface PropsType {
    name: string
    age: number
}
interface StateType {
    count: number
}

export default class ClassComponent extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props)
        this.state = {
            count: 0
        }
    }
    handleClick = () => {
        console.log(this.state);
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        const { name, age } = this.props
        return (
            <>
                <div onClick={this.handleClick}>ClassComponent</div>
                <p> Hello, {name}</p>
            </>

        )
    }
}
