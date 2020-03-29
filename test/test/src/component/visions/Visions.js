import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getVisions, deleteVisions } from "../../actions/visions";

export class Visions extends Component {
  static propTypes = {
    visions: PropTypes.array.isRequired,
    getVisions: PropTypes.func.isRequired,
    deleteVisions: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getVisions();
  }
  render() {
    return (
      <Fragment>
        <h2>Vision</h2>
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
            {this.props.visions.map(vision => (
              <tr key={vision.id}>
                <td>{vision.id}</td>
                <td>{vision.vision}</td>
                <td>
                  {vision.peos.map((peo, key) => (
                    <div key={peo.id}>{peo.code}</div>
                  ))}
                </td>

                <td>
                  <button
                    onClick={this.props.deleteVisions.bind(this, vision.id)}
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
  visions: state.visions.visions
});
export default connect(mapStateToProps, { getVisions, deleteVisions })(Visions);
