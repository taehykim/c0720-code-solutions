import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }

  render() {
    const clickCount = this.state.count;
    let className = null;

    if (clickCount >= 18) {
      className = 'purple';
    } else if (clickCount >= 15) {
      className = 'pink';
    } else if (clickCount >= 12) {
      className = 'red';
    } else if (clickCount >= 9) {
      className = 'orange';
    } else if (clickCount >= 6) {
      className = 'yellow';
    } else if (clickCount >= 3) {
      className = 'green';
    }

    return (
      <button onClick={this.handleClick} className={className}>
        Hot Button
      </button>
    );
  }
}

export default HotButton;
