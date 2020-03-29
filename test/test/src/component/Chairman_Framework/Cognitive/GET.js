import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getCongitive,
  deleteCongitive
} from "../../../actions/chairman_framework_actions/cognitive";
export class GET extends Component {
  static propTypes = {
    cognitives: PropTypes.array.isRequired,
    getCongitive: PropTypes.func.isRequired,
    deleteCongitive: PropTypes.func.isRequired
  };
  //component load then
  componentDidMount() {
    this.props.getCongitive();
  }
  render() {
    return (
      <Fragment>
        <h2>Cognitive Domain (thinking, knowledge)</h2>
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
            {this.props.cognitives.map(cognitive => (
              <tr key={cognitive.id}>
                <td>{cognitive.id}</td>
                <td>{cognitive.code}</td>
                <td>{cognitive.definition}</td>
                <td>{cognitive.verbs}</td>
                <td>
                  <button
                    onClick={this.props.deleteCongitive.bind(
                      this,
                      cognitive.id
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
  cognitives: state.cognitives.cognitives
});
export default connect(mapStateToProps, { getCongitive, deleteCongitive })(GET);
