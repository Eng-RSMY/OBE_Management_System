import React, { Component } from "react";
import Select from "react-select";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addMission } from "../../actions/missions";
import { getPeos } from "../../actions/peos";

export class Form extends Component {
  state = {
    mission: "",
    peos: null
  };

  static propTypes = {
    peos: PropTypes.func.isRequired,
    getPeos: PropTypes.func.isRequired,
    addMission: PropTypes.func.isRequired
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
    const { mission, peos } = this.state;
    const missions = { mission, peos };
    missions.peos = [];
    for (let i in peos) {
      missions.peos.push(peos[i].value);
    }
    this.props.addMission(missions);
  };

  render() {
    const { mission, peos } = this.state;

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
        <h1>Add Mission</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Mission</label>
            <input
              className="form-control"
              type="text"
              name="mission"
              onChange={this.onChange}
              value={mission}
            ></input>
            <label>SELECT PEO</label>
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

export default connect(mapStateToProps, { addMission, getPeos })(Form);
