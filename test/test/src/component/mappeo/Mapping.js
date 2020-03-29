import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPeo_Visions, deletePeo_Visions } from "../../actions/peo_visions";

export class Mapping extends Component {
  static propTypes = {
    peo_visions: PropTypes.array.isRequired,
    getPeo_Visions: PropTypes.func.isRequired,
    deletePeo_Visions: PropTypes.func.isRequired
  };
  //component load then
  componentDidMount() {
    this.props.getPeo_Visions();
  }
  render() {
    console.log(this.props.peo_visions);
    return (
      <Fragment>
        <h2>Program Educational Objectives (PEOs)</h2>
        <table className="table table-stripped">
          <thead>
            <tr>
              <th>ID</th>
              <th>VISION</th>
              <th>PEO</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.peo_visions.map(peo_vision => (
              <tr key={peo_vision.id}>
                <td>{peo_vision.id}</td>
                <td>{peo_vision.vision}</td>
                <td>{peo_vision.peo}</td>

                <td>
                  <button
                    onClick={this.props.deletePeo_Visions.bind(
                      this,
                      peo_vision.id
                    )}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

//state of redux
const mapStateToProps = state => ({
  peo_visions: state.peo_visions.peo_visions
});
export default connect(mapStateToProps, { getPeo_Visions, deletePeo_Visions })(
  Mapping
);
