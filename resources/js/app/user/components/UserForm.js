import React from 'react';

export default class UserForm extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
          name : '',
          email    : '',
          password : '',
        };

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChangeUserName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeEmail(e) {
      this.setState({
        email: e.target.value
      });
  }

  onChangePassword(e) {
       this.setState({
        password: e.target.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.onFormSubmit(this.state);
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input type="text" 
                  className="form-control"
                  value={this.state.name}
                  onChange={this.onChangeUserName}
                  placeholder="Enter username" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" 
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                  className="form-control"
                  placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" 
                    className="form-control"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    placeholder="Enter Password" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>   
    );
  }
}
