import { Component } from 'react'
import Header from './components/Header'
import Form from './components/Form'

export default class App extends Component {

  render() {
    return (
      <div>
        {/* <Header content="Đây là props"></Header> */}
        App
        <Form></Form>
      </div>
    )
  }
}
