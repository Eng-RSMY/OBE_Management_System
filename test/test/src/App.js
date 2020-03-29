import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Register from "../src/component/accounts/Register";
import Login from "../src/component/accounts/Login";
import Dashboard from "./component/visions/Dashboard";
import Dashboardmap from "./component/mappeo/Dashboard";
import Dashboardpeo from "./component/peo/Dashboard";
import Dashboardmission from "./component/missions/Dashboard";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./component/layout/Header";
// private routes
import PrivateRoute from "../src/component/common/PrivateRoutes"; //main admin
import ChairmanPrivateRoute from "../src/component/common/ChairmanPrivateRoutes";
import ITManagerPrivateRoute from "../src/component/common/ITManagerPrivateRoutes";
import TeacherPrivateRoute from "../src/component/common/TeacherPrivateRoutes";
import StudentPrivateRoute from "../src/component/common/StudentPrivateRoutes";
// above private routes
import { loaduser } from "./actions/auth";
import Form from "../src/component/Chairman_Framework/clo/Form";
import CognitiveForm from "../src/component/Chairman_Framework/Cognitive/Form";
import AffectiveForm from "../src/component/Chairman_Framework/Affective/Form";
import PsychomotorForm from "../src/component/Chairman_Framework/Psychomotor/Form";
import PloDashboard from "./component/plo/PloDashboard";
import SubjectDashboard from "./component/subject/SubjectDashboard";
import ITDashboard from "./component/IT_Manager_Framework/ITDashboard";
import TeacherDashboard from "./component/Teacher_Framework/TeacherDashboard";
import StudentDashboard from "./component/Student_Framework/StudentDashboard";

import PEOMISSIONDASHBOARD from "./component/peomissions/Dashboard";
import AdminDashboard from "./component/Admin_Framework/AdminDashboard";

export class App extends Component {
  componentDidMount() {
    store.dispatch(loaduser);
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Header />
            <div className="container">
              <Switch>
                <ChairmanPrivateRoute
                  exact
                  path="/mappeo"
                  component={Dashboardmap}
                ></ChairmanPrivateRoute>
                <ChairmanPrivateRoute
                  exact
                  path="/vision"
                  component={Dashboard}
                ></ChairmanPrivateRoute>
                <ChairmanPrivateRoute
                  exact
                  path="/peo"
                  component={Dashboardpeo}
                ></ChairmanPrivateRoute>
                <ChairmanPrivateRoute
                  exact
                  path="/mission"
                  component={Dashboardmission}
                ></ChairmanPrivateRoute>
                <ChairmanPrivateRoute
                  exact
                  path="/clo"
                  component={Form}
                ></ChairmanPrivateRoute>
                <ChairmanPrivateRoute
                  exact
                  path="/plo"
                  component={PloDashboard}
                ></ChairmanPrivateRoute>
                <ChairmanPrivateRoute
                  exact
                  path="/cognitive"
                  component={CognitiveForm}
                ></ChairmanPrivateRoute>
                <ChairmanPrivateRoute
                  exact
                  path="/affective"
                  component={AffectiveForm}
                ></ChairmanPrivateRoute>
                <ChairmanPrivateRoute
                  exact
                  path="/psychomotors"
                  component={PsychomotorForm}
                ></ChairmanPrivateRoute>
                <ChairmanPrivateRoute
                  exact
                  path="/subject"
                  component={SubjectDashboard}
                ></ChairmanPrivateRoute>
                <ITManagerPrivateRoute
                  exact
                  path="/it_manager"
                  component={ITDashboard}
                ></ITManagerPrivateRoute>
                <TeacherPrivateRoute
                  exact
                  path="/teacher"
                  component={TeacherDashboard}
                ></TeacherPrivateRoute>
                <StudentPrivateRoute
                  exact
                  path="/student"
                  component={StudentDashboard}
                ></StudentPrivateRoute>
                <PrivateRoute
                  exact
                  path="/admindashboard"
                  component={AdminDashboard}
                ></PrivateRoute>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/register" component={Register}></Route>
              </Switch>
            </div>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
