import React, { Component } from "react";
import Select from "react-select";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addVision } from "../../actions/visions";
import { getPeos } from "../../actions/peos";

export class Form extends Component {
  state = {
    vision: "",
    peos: null
  };

  static propTypes = {
    peos: PropTypes.func.isRequired,
    addVision: PropTypes.func.isRequired,
    getPeos: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getPeos();
  }

  onChange = e => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onChangepeos = selected => {
    console.log(selected);
    this.setState({
      peos: selected
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { vision, peos } = this.state;
    const visions = { vision, peos };
    visions.peos = [];
    for (let i in peos) {
      visions.peos.push(peos[i].value);
    }

    console.log(visions);
    this.props.addVision(visions);
  };
  render() {
    // console.log(this.props.peos);

    const { vision, peos } = this.state;
    // console.log(this.props.peos);
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

    console.log(opt);

    // console.log(optionItems);
    return (
      <div>
        <h1>Add vision</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>vision</label>
            <input
              className="form-control"
              type="text"
              name="vision"
              onChange={this.onChange}
              value={vision}
            ></input>
            <label>SELECT PEOs</label>
            <Select
              value={peos}
              onChange={this.onChangepeos}
              options={opt}
              isMulti
            />

            {/* <select name="peos" onChange={this.onChange} value={peos}>
              {options}
            </select> */}
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

export default connect(mapStateToProps, { addVision, getPeos })(Form);
