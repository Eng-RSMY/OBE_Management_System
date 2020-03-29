import axios from "axios";
import jwt_decode from "jwt-decode";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS
} from "./types";

//check token and load user
export const loaduser = () => (dispatch, getState) => {
  //user loading
  dispatch({ type: USER_LOADING });

  axios
    .get("http://127.0.0.1:8000/api/auth/user", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: AUTH_ERROR
      });
    });
};

//loging user
export const login = (username, password, email) => dispatch => {
  //Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  //request body

  const body = JSON.stringify({ username, password, email });
  axios
    .post("http://localhost:8000/api/auth/login/", body, config)
    .then(res => {
      const token = res.data.token;
      localStorage.setItem("token", token);
      var decoded = jwt_decode(token);

      console.log(decoded);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: decoded,
        token
      });
    })

    .catch(err => {
      console.log(err);
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

//logout user
/*
export const logout = () => (dispatch, getState) => {
  axios
    .post("http://127.0.0.1:8000/api/auth/logout/", null, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: LOGOUT_SUCCESS
        // payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
*/
export function logout() {
  return dispatch => {
    const token = token;
    localStorage.removeItem("token", token);
    dispatch({
      type: LOGOUT_SUCCESS
    });
  };
}

//setup config with token --helper function
export const tokenConfig = getState => {
  //gt token from state

  const token = getState().auth.token;

  //Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  //if token add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  return config;
};
