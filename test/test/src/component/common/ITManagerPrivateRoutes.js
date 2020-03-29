import React from "react";
import { Route, Redierct, Router, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ITManagerPrivateRoutes = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (auth.isLoading) {
        return <h2>Loading...</h2>;
      } else if (!auth.is_depHead) {
        return <Redirect to="/login" />;
      } else {
        return <Component {...props} />;
      }
    }}
  />
);

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(ITManagerPrivateRoutes);
