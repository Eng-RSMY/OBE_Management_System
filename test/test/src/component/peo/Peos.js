import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPeos, deletePeos } from "../../actions/peos";
export class Peos extends Component {
  static propTypes = {
    peos: PropTypes.array.isRequired,
    getPeos: PropTypes.func.isRequired,
    deletePeos: PropTypes.func.isRequired
  };
  //component load then
  componentDidMount() {
    this.props.getPeos();
  }
  render() {
    return (
      <Fragment>
        <h2>Program Educational Objectives (PEOs)</h2>
        <table className="table table-stripped">
          <thead>
            <tr>
              <th>ID</th>
              <th>CODE</th>
              <th>DESCRIPTION</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.peos.map(peo => (
              <tr key={peo.id}>
                <td>{peo.id}</td>
                <td>{peo.code}</td>
                <td>{peo.description}</td>

                <td>
                  <button
                    onClick={this.props.deletePeos.bind(this, peo.id)}
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
  peos: state.peos.peos
});
export default connect(mapStateToProps, { getPeos, deletePeos })(Peos);
