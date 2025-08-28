import { Component } from "react"

//Kiểu dữ liệu của props
interface PropsType {
    content: string
}

//Kiểu dữ liệu của state
interface StateType {
    items: string[]
    check: boolean
}

class Header extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props)
        this.state = {
            items: ["item 1", "item 2", "item 3"],
            check: true
        }
    }
    click = () => {
        console.log("Clicked!!");
        this.setState({
            check: !this.state.check
        })
    }
    componentDidMount(): void {
        console.log("Component được gắn vào giao diện.");
    }
    componentDidUpdate(): void {
        console.log("Component được cập nhật.");
    }
    componentWillUnmount(): void {
        console.log("Component được gỡ khỏi giao diện.");
    }
    render() {
        return <>
            <h1 onClick={() => { this.click() }}>{this.props.content}</h1>
            {
                this.state.check && <ul>
                    {this.state.items.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            }
        </>
    }
}

export default Header