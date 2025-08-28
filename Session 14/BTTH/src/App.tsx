import { Component } from 'react'
import "./styles.css"

interface StateType {
  seconds: number
  isRunning: boolean
}

export default class App extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props)
    this.state = {
      seconds: 3595,
      isRunning: false
    }
  }
  componentDidMount(): void {
    console.log("Component duoc mount");
  }
  componentDidUpdate(): void {
    console.log("Component update");
  }
  componentWillUnmount(): void {
    console.log("Component duoc unmount");
  }
  startTime = () => {
    if (!this.state.isRunning) {
      //Khoi tao tien trinh chay sau moi 1 giay
      setInterval(() => {
        //Cu moi giay cap nhat state tang seconds len 1
        this.setState({
          seconds: this.state.seconds + 1
        })
        console.log(this.state.seconds);
      }, 1000)
      
      this.setState({
        isRunning: true
      })
    }
  }
  formatTime = (): string => {
    //Tinh ra so gio
    let hour = Math.floor(this.state.seconds / 3600);
    //Tinh ra so phut
    let min = Math.floor((this.state.seconds % 3600) / 60);
    //Tinh so giay
    let sec = (this.state.seconds % 60)
    //Tra ve chuoi sau khi tinh
    return `${hour}:${min}:${sec}`
  }
  render() {
    return (
      <div className="timer-container">
        <div className="timer-header">
          <h1 className="timer-title">Đồng Hồ Đếm Thời Gian</h1>
        </div>
        <div className="mode-selector">
          <button className="mode-btn active" data-mode="stopwatch">
            Bấm Giờ
          </button>
        </div>
        <div className="time-display" id="timeDisplay">
          {this.formatTime()}
        </div>
        <div className="progress-bar">
          <div className="progress-fill" id="progressFill" />
        </div>
        <div className="controls">
          <button className="control-btn start-btn" id="startBtn" onClick={this.startTime}>
            Bắt Đầu
          </button>
          <button
            className="control-btn pause-btn"
            id="pauseBtn"
            style={{ display: "none" }}
          >
            Tạm Dừng
          </button>
          <button className="control-btn reset-btn" id="resetBtn">
            Đặt Lại
          </button>
        </div>
        <div className="status-message" id="statusMessage" />
      </div>
    )
  }
}
