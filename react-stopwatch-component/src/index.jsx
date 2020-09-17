import React from 'react';
import ReactDOM from 'react-dom';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false, time: 0 };
    this.handleStartBtn = this.handleStartBtn.bind(this);
    this.handlePauseBtn = this.handlePauseBtn.bind(this);
    this.handleResetBtn = this.handleResetBtn.bind(this);
  }

  handleStartBtn() {
    this.setState(state => ({ isOn: !state.isOn }));
    this.timerID = setInterval(() => {
      this.setState(state => ({ time: state.time + 1 }));
    }, 1000);
  }

  handlePauseBtn() {
    this.setState(state => ({ isOn: !state.isOn }));
    clearInterval(this.timerID);
  }

  handleResetBtn() {
    this.setState({ isOn: false, time: 0 });
    clearInterval(this.timerID);
  }

  render() {
    let playClassName = null;
    let pauseClassName = null;
    if (this.state.isOn) {
      playClassName = 'fas fa-play fa-2x hide';
      pauseClassName = 'fas fa-pause fa-2x';
    } else {
      playClassName = 'fas fa-play fa-2x';
      pauseClassName = 'fas fa-pause fa-2x hide';
    }

    return (
      <div className="watch-container">
        <div className="watch" onClick={this.handleResetBtn}>
          <div className="time">{this.state.time}</div>
        </div>
        <i className={playClassName} onClick={this.handleStartBtn}></i>
        <i className={pauseClassName} onClick={this.handlePauseBtn}></i>
      </div>
    );
  }
}

ReactDOM.render(<Stopwatch />, document.getElementById('root'));
