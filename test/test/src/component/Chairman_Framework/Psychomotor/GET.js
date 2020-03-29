import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getPsychomotor,
  deletePsychomotor
} from "../../../actions/chairman_framework_actions/psychomotors";
export class GET extends Component {
  static propTypes = {
    psychomotors: PropTypes.array.isRequired,
    getPsychomotor: PropTypes.func.isRequired,
    deletePsychomotor: PropTypes.func.isRequired
  };
  //component load then
  componentDidMount() {
    this.props.getPsychomotor();
  }
  render() {
    return (
      <Fragment>
        <h2>Psychomotors Domain (feelings, attitudes)</h2>
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
            {this.props.psychomotors.map(psychomotor => (
              <tr key={psychomotor.id}>
                <td>{psychomotor.id}</td>
                <td>{psychomotor.code}</td>
                <td>{psychomotor.definition}</td>
                <td>{psychomotor.verbs}</td>
                <td>
                  <button
                    onClick={this.props.deletePsychomotor.bind(
                      this,
                      psychomotor.id
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
  psychomotors: state.psychomotors.psychomotors
});
export default connect(mapStateToProps, { getPsychomotor, deletePsychomotor })(
  GET
);
