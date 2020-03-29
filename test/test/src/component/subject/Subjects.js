import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSubjects, deleteSubjects } from "../../actions/subjects";

export class Subjects extends Component {
  static propTypes = {
    subjects: PropTypes.array.isRequired,
    getSubjects: PropTypes.func.isRequired,
    deleteSubjects: PropTypes.func.isRequired
  };
  //component load then
  componentDidMount() {
    this.props.getSubjects();
  }
  render() {
    return (
      <Fragment>
        <h2>COURSES</h2>
        <table className="table table-stripped">
          <thead>
            <tr>
              <th>id</th>
              <th>Year</th>
              <th>Calender Year</th>
              <th>CODE</th>
              <th>SUBJECT NAME</th>
              <th>CLOs</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.subjects.map(subject => (
              <tr key={subject.id}>
                <td>{subject.id}</td>
                <td>{subject.year}</td>
                <td>{subject.calendar_year}</td>
                <td>{subject.code}</td>
                <td>{subject.tittle}</td>
                <td>
                  {subject.clos.map((clo, key) => (
                    <div key={clo.id}>{clo.full_discription}</div>
                  ))}
                </td>
                <td>
                  <button
                    onClick={this.props.deleteSubjects.bind(this, subject.id)}
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
  subjects: state.subjects.subjects
});
export default connect(mapStateToProps, { getSubjects, deleteSubjects })(
  Subjects
);
