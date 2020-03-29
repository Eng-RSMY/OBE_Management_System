import React, { Component } from "react";
import Select from "react-select";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addSubject } from "../../actions/subjects";
import { getClos } from "../../actions/clos";

export class Form extends Component {
  //to part of component thats why we create state down there
  state = {
    year: "",
    calendar_year: "",
    code: "",
    tittle: "",
    clos: null
  };
  static propTypes = {
    clos: PropTypes.func.isRequired,
    getClos: PropTypes.func.isRequired,
    addSubject: PropTypes.func.isRequired
  };
  componentDidMount() {
    this.props.getClos();
  }
  onChangeclos = selected => {
    // console.log(selected);
    this.setState({
      clos: selected
    });
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });
  onSubmit = e => {
    e.preventDefault();
    const { year, calendar_year, code, tittle, clos } = this.state;
    const subject = { year, calendar_year, code, tittle, clos };
    subject.clos = [];
    for (let i in clos) {
      subject.clos.push(clos[i].value);
    }
    console.log(subject);
    this.props.addSubject(subject);
  };
  render() {
    const { year, calendar_year, code, tittle, clos } = this.state;
    let opt = [];
    console.log(this.props.clos.length);

    if (this.props.clos.length > 0) {
      for (let i in this.props.clos) {
        opt.push({
          value: this.props.clos[i].id,
          label: this.props.clos[i].full_discription
        });
      }
    }
    return (
      <div>
        <h1>Add Subject</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Year</label>
            <input
              className="form-control"
              type="text"
              name="year"
              onChange={this.onChange}
              value={year}
            ></input>
          </div>
          <div className="form-group">
            <label>Calendar Year</label>
            <input
              className="form-control"
              type="text"
              name="calendar_year"
              onChange={this.onChange}
              value={calendar_year}
            ></input>
          </div>
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
            <label>Subject Name</label>
            <input
              className="form-control"
              type="text"
              name="tittle"
              onChange={this.onChange}
              value={tittle}
            ></input>
            <label>SELECT CLOs</label>
            <Select
              value={clos}
              onChange={this.onChangeclos}
              options={opt}
              isMulti
            />
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
const mapStateToProps = state => ({
  clos: state.clos.clos
});

export default connect(mapStateToProps, { addSubject, getClos })(Form);
