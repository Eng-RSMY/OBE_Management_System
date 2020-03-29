import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getClos, deleteClos } from "../../../actions/clos";

export class GetCLO extends Component {
  static propTypes = {
    clos: PropTypes.array.isRequired,
    getClos: PropTypes.func.isRequired,
    deleteClos: PropTypes.func.isRequired
  };
  //component load then
  componentDidMount() {
    this.props.getClos();
  }
  render() {
    return (
      <Fragment>
        <h2>Courses Learning Outcomes (Clos)</h2>
        <table className="table table-stripped">
          <thead>
            <tr>
              <th>ID</th>
              <th>CODE</th>
              <th>DESCRIPTION</th>
              <th>PLO</th>
              <th>Cognitive Domain</th>
              <th>Selected Verb</th>
              <th>Affective Domain</th>
              <th>Psychomotor Domain</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.clos.map(clo => (
              <tr key={clo.id}>
                <td>{clo.id}</td>
                <td>{clo.code}</td>
                <td>{clo.full_discription}</td>
                <td>
                  {clo.plos.map((plo, key) => (
                    <div key={plo.id}>{plo.code}</div>
                  ))}
                </td>
                <td>
                  {clo.cognitives.map((cognitive, key) => (
                    <div key={cognitive.id}>{cognitive.code}</div>
                  ))}
                </td>
                <td>{clo.verb}</td>
                <td>
                  {clo.affectives.map((affective, key) => (
                    <div key={affective.id}>{affective.code}</div>
                  ))}
                </td>
                <td>
                  {clo.psychomotors.map((psychomotor, key) => (
                    <div key={psychomotor.id}>{psychomotor.code}</div>
                  ))}
                </td>

                <td>
                  <button
                    onClick={this.props.deleteClos.bind(this, clo.id)}
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
  clos: state.clos.clos
});
export default connect(mapStateToProps, { getClos, deleteClos })(GetCLO);
