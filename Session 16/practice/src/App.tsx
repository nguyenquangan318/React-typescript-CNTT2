import ClassComponent from './component/ClassComponent'
import FuntionalComponent from './component/FuntionalComponent'

export default function App() {
  return (
    <>
      <ClassComponent name="Class" age={10}></ClassComponent>
      <FuntionalComponent name="Function" age={20}></FuntionalComponent>
    </>
  )
}
