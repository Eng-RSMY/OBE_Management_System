import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPlos, deletePlos } from "../../actions/plos";

export class Plos extends Component {
  static propTypes = {
    plos: PropTypes.array.isRequired,
    getPlos: PropTypes.func.isRequired,
    deletePlos: PropTypes.func.isRequired
  };
  //component load then
  componentDidMount() {
    this.props.getPlos();
  }
  render() {
    return (
      <Fragment>
        <h2>Programme Learning Outcomes</h2>
        <table className="table table-stripped">
          <thead>
            <tr>
              <th>ID</th>
              <th>CODE</th>
              <th>DESCRIPTION</th>
              <th>PEO</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.plos.map(plo => (
              <tr key={plo.id}>
                <td>{plo.id}</td>
                <td>{plo.code}</td>
                <td>{plo.description}</td>
                <td>
                  {plo.peos.map((peo, key) => (
                    <div key={peo.id}>{peo.code}</div>
                  ))}
                </td>

                <td>
                  <button
                    onClick={this.props.deletePlos.bind(this, plo.id)}
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
  plos: state.plos.plos
});
export default connect(mapStateToProps, { getPlos, deletePlos })(Plos);
