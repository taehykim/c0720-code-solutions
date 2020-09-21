import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  validatePassword(password) {
    const regex = /(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*()]).{8,}/g;
    if (password.match(regex)) return true;
    else return false;
  }

  render() {
    const isValid = this.validatePassword(this.state.password);
    let requireErrorDivClassName = 'error-div red';
    let errorDivClassName = 'error-div red';
    let iconClass = 'fas fa-2x';

    if (isValid) {
      requireErrorDivClassName += ' hide';
      errorDivClassName += ' hide';
      iconClass += ' fa-check green';
    } else {
      iconClass += ' fa-times red';
      if (this.state.password === '') {
        errorDivClassName += ' hide';
      } else {
        requireErrorDivClassName += ' hide';
      }
    }

    return (
      <div>
        <label htmlFor="password">Password</label>
        <div className="input-icon">
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          ></input>
          <i className={iconClass}></i>
        </div>
        <div className={requireErrorDivClassName}>A password is required</div>
        <div className={errorDivClassName}>
          Your password must contain at least 8 characters with at least one
          digit, one uppercase and one special character (!, @, #, $, %, ^, &,
          *, (, ))
        </div>
      </div>
    );
  }
}

export default ValidatedInput;
