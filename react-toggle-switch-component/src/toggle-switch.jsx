import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isOn: !state.isOn
    }));
  }

  render() {
    let sliderBg = null;
    let slider = null;
    if (this.state.isOn) {
      slider = 'on';
      sliderBg = 'on-slider';
    } else {
      slider = 'off';
      sliderBg = 'off-slider';
    }

    return (
      <div className={sliderBg}>
        <div className={slider} onClick={this.handleClick}></div>
      </div>
    );
  }
}

export default ToggleSwitch;
