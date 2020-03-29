import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

export class Header extends Component {
  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  };
  render() {
    const {
      is_admin,
      is_chairman,
      is_depHead,
      is_teacher,
      is_student,
      user
    } = this.props.auth;

    const AdminLinks = (
      <ul className="navbar-nav ml-auto mt-2">
        <span className="navbar-nav ml-auto mt-2 mt-lg-0">
          <strong>{user ? `Welcome ${user.username}` : ""}</strong>
        </span>
        <li className="nav-items">
          <Link to="/admindashboard" className="nav-link">
            Admin Dashbboard
          </Link>
        </li>

        <li className="nav-items">
          <button
            onClick={this.logout.bind(this)}
            className="nav-link btn btn-info btn-sm text-ligth"
          >
            Logout
          </button>
        </li>
      </ul>
    );
    const ChairmanLinks = (
      <ul className="navbar-nav ml-auto mt-2">
        <span className="navbar-nav ml-auto mt-2 mt-lg-0">
          <strong>{user ? `Welcome ${user.username}` : ""}</strong>
        </span>
        <li className="nav-items">
          <Link to="/mappeo" className="nav-link">
            MAPPING
          </Link>
        </li>
        <li className="nav-items">
          <Link to="/peo" className="nav-link">
            ADD PEO
          </Link>
        </li>
        <li className="nav-items">
          <Link to="/vision" className="nav-link">
            ADD VISION
          </Link>
        </li>
        <li className="nav-items">
          <Link to="/mission" className="nav-link">
            ADD MISSION
          </Link>
        </li>

        <li className="nav-items">
          <Link to="/plo" className="nav-link">
            ADD PLO
          </Link>
        </li>
        <li className="nav-items">
          <Link to="/cognitive" className="nav-link">
            ADD Cognitive
          </Link>
        </li>
        <li className="nav-items">
          <Link to="/affective" className="nav-link">
            ADD Affective
          </Link>
        </li>
        <li className="nav-items">
          <Link to="/psychomotors" className="nav-link">
            ADD Psychomotors
          </Link>
        </li>
        <li className="nav-items">
          <Link to="/clo" className="nav-link">
            ADD CLO
          </Link>
        </li>
        <li className="nav-items">
          <Link to="/subject" className="nav-link">
            ADD SUBJECT
          </Link>
        </li>

        <li className="nav-items">
          <button
            onClick={this.logout.bind(this)}
            className="nav-link btn btn-info btn-sm text-ligth"
          >
            Logout
          </button>
        </li>
      </ul>
    );
    const ITManagerLinks = (
      <ul className="navbar-nav ml-auto mt-2">
        <span className="navbar-nav ml-auto mt-2 mt-lg-0">
          <strong>{user ? `Welcome ${user.username}` : ""}</strong>
        </span>

        <li className="nav-items">
          <Link to="/it_manager" className="nav-link">
            IT_Manager Dashboard
          </Link>
        </li>

        <li className="nav-items">
          <button
            onClick={this.logout.bind(this)}
            className="nav-link btn btn-info btn-sm text-ligth"
          >
            Logout
          </button>
        </li>
      </ul>
    );
    const TeacherLinks = (
      <ul className="navbar-nav ml-auto mt-2">
        <span className="navbar-nav ml-auto mt-2 mt-lg-0">
          <strong>{user ? `Welcome ${user.username}` : ""}</strong>
        </span>

        <li className="nav-items">
          <Link to="/teacher" className="nav-link">
            Teacher Dashboard
          </Link>
        </li>

        <li className="nav-items">
          <button
            onClick={this.logout.bind(this)}
            className="nav-link btn btn-info btn-sm text-ligth"
          >
            Logout
          </button>
        </li>
      </ul>
    );
    const StudentLinks = (
      <ul className="navbar-nav ml-auto mt-2">
        <span className="navbar-nav ml-auto mt-2 mt-lg-0">
          <strong>{user ? `Welcome ${user.username}` : ""}</strong>
        </span>

        <li className="nav-items">
          <Link to="/student" className="nav-link">
            Student Dashboard
          </Link>
        </li>

        <li className="nav-items">
          <button
            onClick={this.logout.bind(this)}
            className="nav-link btn btn-info btn-sm text-ligth"
          >
            Logout
          </button>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto mt-2">
        <li className="nav-items">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
        <li className="nav-items">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
      </ul>
    );

    let links = null;
    if (is_admin) {
      links = AdminLinks;
    } else if (is_chairman) {
      links = ChairmanLinks;
    } else if (is_depHead) {
      links = ITManagerLinks;
    } else if (is_teacher) {
      links = TeacherLinks;
    } else if (is_student) {
      links = StudentLinks;
    } else {
      links = guestLinks;
    }
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <div className="navbar">
            <div className="navbar-inner">
              <div className="container">
                <h1 className="brand">OBE MANAGEMENT SYSTEM</h1>
              </div>
              {links}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
const mapStateProps = state => ({
  auth: state.auth
});
export default connect(mapStateProps, { logout })(Header);
