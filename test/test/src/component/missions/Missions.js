import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMissions, deleteMissions } from "../../actions/missions";

export class Missions extends Component {
  static propTypes = {
    missions: PropTypes.array.isRequired,
    getMissions: PropTypes.func.isRequired,
    deleteMissions: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getMissions();
  }
  render() {
    return (
      <Fragment>
        <h2>Mission</h2>
        <table className="table table-stripped">
          <thead>
            <tr>
              <th>ID</th>
              <th>MISSION</th>
              <th>PEO</th>

              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.missions.map(mission => (
              <tr key={mission.id}>
                <td>{mission.id}</td>
                <td>{mission.mission}</td>
                <td>
                  {mission.peos.map((peo, key) => (
                    <div key={peo.id}>{peo.code}</div>
                  ))}
                </td>
                <td>
                  <button
                    onClick={this.props.deleteMissions.bind(this, mission.id)}
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

const mapStateToProps = state => ({
  missions: state.missions.missions
});
export default connect(mapStateToProps, { getMissions, deleteMissions })(
  Missions
);
