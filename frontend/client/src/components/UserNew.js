import React from 'react';
import UserModel from '../models/user';
import './UserNew.css';

class UserNew extends React.Component {
  state = {
    name: '',
    email: '',
    username: '',
    password: '',
    completed: false
  };

  handleInputChange = (e) => {
    if (e.target.name === 'completed') {
      this.setState((prevState) => {
        return { completed: !prevState.completed };
      });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    UserModel.create(this.state)
    .then((data) => {
      this.props.history.push('/user');
    });
  }

  render() {
    console.log('Your props: ', this.props);

    return (
      <div className='register'>
        <div className='heading'>
          <p>Not Registered Yet?</p>
          <p>Start an account to create rooms <br/> and share them with friends</p>
        </div>
        <div className='reg-container'>
        <p>Register</p>
          <form onSubmit = {this.handleFormSubmit}>
          <div className = "formGroup">
            <label
              className="formGroupLabel"
              htmlFor="name"></label>
            <input
              onChange={this.handleInputChange}
              className="formGroupInput"
              value={this.state.name}
              type="text"
              placeholder="Name"
              name="name"
            />
          </div>
          <div className = "formGroup">
            <label 
              className="formGroupLabel"
              htmlFor="email">
              </label>
              <input 
                onChange = {this.handleInputChange}
                className="formGroupInput"
                value={this.state.email}
                type="email"
                placeholder="Email"
                name="email"
              />
          </div>
          <div className="formGroup">
            <label
              className="formGroupLabel"
              htmlFor="username">
            </label>
            <input 
            onChange={this.handleInputChange}
            className="formGroupInput"
            value={this.state.username}
            type="text"
            placeholder="Username"
            name="username"
            />
          </div>
          <div className="formGroup">
            <label
              className="formGroupLabel"
              htmlFor="password"></label>
            <input
              onChange={this.handleInputChange}
              className="formGroupInput"
              value={this.state.password}
              type="password"
              placeholder="Password"
              name="password"
            />
          </div>

        <input className='submit-user' type="submit" value='Register'/>
        </form>
        </div>
        <div className='circle1-new'></div>
        <div className='circle2-new'></div>
        <div className='circle3-new'></div>
        <div className='rectangle-new'></div>
      </div>
    );
  }
}

export default UserNew;