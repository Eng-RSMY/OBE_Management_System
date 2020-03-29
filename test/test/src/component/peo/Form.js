import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addPeo } from "../../actions/peos";
export class Form extends Component {
  state = {
    code: "",
    description: ""
  };
  static propTypes = {
    addPeo: PropTypes.func.isRequired
  };
  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });
  onSubmit = e => {
    e.preventDefault();
    const { code, description } = this.state;
    const peo = { code, description };
    this.props.addPeo(peo);
  };
  render() {
    const { code, description } = this.state;
    return (
      <div>
        <h1>Add PEO</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>code</label>
            <input
              className="form-control"
              type="text"
              name="code"
              onChange={this.onChange}
              value={code}
            ></input>
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              type="text"
              name="description"
              onChange={this.onChange}
              value={description}
            ></input>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addPeo })(Form);
