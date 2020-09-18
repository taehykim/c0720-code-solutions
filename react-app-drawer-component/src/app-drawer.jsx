import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({ isOpen: !state.isOpen }));
  }

  render() {
    let menuBarClassName = 'menu-bar';
    let menuContentsClassName = 'menu-contents';

    if (this.state.isOpen) {
      menuBarClassName += ' hide';
    } else {
      menuContentsClassName += ' hide';
    }

    return (
      <div className="container">
        <div className={menuBarClassName} onClick={this.handleClick}>
          <i className="fas fa-bars fa-2x"></i>
        </div>
        <div className={menuContentsClassName}>
          <ul className="menu-ul">
            <li className="title">Menu</li>
            <li onClick={this.handleClick}>About</li>
            <li onClick={this.handleClick}>Get Started</li>
            <li onClick={this.handleClick}>Log In</li>
            <li onClick={this.handleClick}>Sign Up</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AppDrawer;
