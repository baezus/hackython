import React from 'react';
import UserModel from '../models/user';

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
      <div>
        <h2>New User</h2>
        <form onSubmit = {this.handleFormSubmit}>
          <div className = "formGroup">
            <label
              className="formGroupLabel"
              htmlFor="name">Name</label>
            <input
              onChange={this.handleInputChange}
              className="formGroupInput"
              value={this.state.name}
              type="text"
              name="name"
            />
          </div>
          <div className = "formGroup">
            <label 
              className="formGroupLabel"
              htmlFor="email">Email
              </label>
              <input 
                onChange = {this.handleInputChange}
                className="formGroupInput"
                value={this.state.email}
                type="email"
                name="email"
              />
          </div>
          <div className="formGroup">
            <label
              className="formGroupLabel"
              htmlFor="username">Username
            </label>
            <input 
            onChange={this.handleInputChange}
            className="formGroupInput"
            value={this.state.username}
            type="text"
            name="username"
            />
          </div>
          <div className="formGroup">
            <label
              className="formGroupLabel"
              htmlFor="password">Password</label>
            <input
              onChange={this.handleInputChange}
              className="formGroupInput"
              value={this.state.password}
              type="password"
              name="password"
            />
          </div>

          <div className = "formGroup">
            <label 
              className="formGroupLabel"
              htmlFor="completed"
              > Completed </label>
            <input 
              onChange={this.handleInputChange}
              className="formGroupInput"
              value={this.state.completed}
              type="checkbox"
              id="completed"
              name="completed"
              />
          </div>
        <input type="submit" value="Add New User"/>
        </form>
      </div>
    );
  }
}

export default UserNew;