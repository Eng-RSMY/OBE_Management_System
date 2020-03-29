import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPeos, addPeo } from "../../actions/peos";
import { getVisions } from "../../actions/visions";
import { addPeoVision } from "../../actions/peo_visions";
import { Form } from "reactstrap";

export class MapForm extends Component {
  //states are elements in table
  //each input to be the part of state of component
  state = {
    peo: "",
    vision: ""
  };

  static propTypes = {
    getVisions: PropTypes.array.isRequired,
    visions: PropTypes.array.isRequired,
    peos: PropTypes.array.isRequired,
    getPeos: PropTypes.func.isRequired,
    addPeo_Vision: PropTypes.func.isRequired
  };

  //change an event say that onchange event
  onChange = e => {
    console.log(e.target.id, e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const { peo, vision } = this.state;
    const map = { peo, vision };
    console.log(map);
    this.props.addPeoVision(map);
  };

  //component load then
  componentDidMount() {
    this.props.getPeos();
    this.props.getVisions();
  }
  render() {
    console.log(this.props.peos);
    console.log(this.props.visions);
    const { peo, vision } = this.state;
    let optionItems = this.props.peos.map(peo => (
      <option value={peo.id} key={peo.id}>
        {peo.code}
      </option>
    ));
    let option = this.props.visions.map(vision => (
      <option value={vision.id} key={vision.id}>
        {vision.vision}
      </option>
    ));

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <select
            name="peo"
            onChange={this.onChange}
            value={peo}
            option={optionItems}
          >
            {optionItems}
          </select>
          <select name="vision" onChange={this.onChange} value={vision}>
            {option}
          </select>

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

//state of redux
const mapStateToProps = state => ({
  peos: state.peos.peos,
  visions: state.visions.visions,
  peo_visions: state.peo_visions.peo_visions
});
export default connect(mapStateToProps, {
  addPeoVision,
  getVisions,
  getPeos,
  addPeo
})(MapForm);
