import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getAffective,
  deleteAffective
} from "../../../actions/chairman_framework_actions/affectives";
export class GET extends Component {
  static propTypes = {
    affectives: PropTypes.array.isRequired,
    getAffective: PropTypes.func.isRequired,
    deleteAffective: PropTypes.func.isRequired
  };
  //component load then
  componentDidMount() {
    this.props.getAffective();
  }
  render() {
    return (
      <Fragment>
        <h2>Affective Domain (feelings, attitudes)</h2>
        <table className="table table-stripped">
          <thead>
            <tr>
              <th>ID</th>
              <th>CODE</th>
              <th>DEFINITION</th>
              <th>VERBS</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.affectives.map(affective => (
              <tr key={affective.id}>
                <td>{affective.id}</td>
                <td>{affective.code}</td>
                <td>{affective.definition}</td>
                <td>{affective.verbs}</td>
                <td>
                  <button
                    onClick={this.props.deleteAffective.bind(
                      this,
                      affective.id
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
  affectives: state.affectives.affectives
});
export default connect(mapStateToProps, { getAffective, deleteAffective })(GET);
