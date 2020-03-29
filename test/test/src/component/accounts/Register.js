import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Register extends Component {
  //state for each input
  state = {
    username: "",
    email: "",
    password: "",
    password2: ""
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("submit");
  };

  onChange = e =>
    //set the component level state
    this.setState({
      [e.target.name]: e.target.value
    });
  render() {
    //destructuring
    const { username, email, password, password2 } = this.state;
    return (
      <div>
        <div className="col=md-6 m-auto">
          <div className="card card-body mt-5">
            <h2 className="text-center">Register</h2>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>UserName</label>
                <input
                  className="form-control"
                  type="text"
                  name="username"
                  onChange={this.onChange}
                  value={username}
                ></input>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  onChange={this.onChange}
                  value={email}
                ></input>
              </div>
              <div className="form-group">
                <label>password</label>
                <input
                  className="form-control"
                  type="text"
                  name="password"
                  onChange={this.onChange}
                  value={password}
                ></input>
              </div>
              <div className="form-group">
                <label>password2</label>
                <input
                  className="form-control"
                  type="text"
                  name="password2"
                  onChange={this.onChange}
                  value={password2}
                ></input>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
                <div>
                  <p>
                    Already have an account
                    <Link to="/login">Login</Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
