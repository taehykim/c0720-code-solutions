import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 1, className: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      count: state.count + 1
    }));

    const clickCount = this.state.count;

    if (clickCount >= 18) {
      this.setState({ className: 'purple' });
    } else if (clickCount >= 15) {
      this.setState({ className: 'pink' });
    } else if (clickCount >= 12) {
      this.setState({ className: 'red' });
    } else if (clickCount >= 9) {
      this.setState({ className: 'orange' });
    } else if (clickCount >= 6) {
      this.setState({ className: 'yellow' });
    } else if (clickCount >= 3) {
      this.setState({ className: 'green' });
    }
  }

  render() {
    return (
      <button onClick={this.handleClick} className={this.state.className}>
        Hot Button
      </button>
    );
  }
}

export default HotButton;
