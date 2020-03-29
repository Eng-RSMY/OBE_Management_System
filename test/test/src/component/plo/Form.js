import React, { Component } from "react";
import Select from "react-select";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addPlo } from "../../actions/plos";
import { getPeos } from "../../actions/peos";

export class Form extends Component {
  state = {
    code: "",
    description: "",
    peos: null
  };
  static propTypes = {
    peos: PropTypes.func.isRequired,
    getPeos: PropTypes.func.isRequired,
    addPlo: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getPeos();
  }
  onChangepeos = selected => {
    console.log(selected);
    this.setState({
      peos: selected
    });
  };
  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });
  onSubmit = e => {
    e.preventDefault();
    const { code, description, peos } = this.state;
    const plo = { code, description, peos };
    plo.peos = [];
    for (let i in peos) {
      plo.peos.push(peos[i].value);
    }
    this.props.addPlo(plo);
  };
  render() {
    const { code, description, peos } = this.state;
    let opt = [];
    console.log(this.props.peos.length);

    if (this.props.peos.length > 0) {
      for (let i in this.props.peos) {
        opt.push({
          value: this.props.peos[i].id,
          label: this.props.peos[i].code
        });
      }
    }
    return (
      <div>
        <h1>Add PLO</h1>
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
            <label>Select PEO</label>
            <Select
              value={peos}
              onChange={this.onChangepeos}
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
  peos: state.peos.peos
});

export default connect(mapStateToProps, { addPlo, getPeos })(Form);
