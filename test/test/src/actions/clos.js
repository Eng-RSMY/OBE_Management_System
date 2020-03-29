//all action perform here like http request
import axios from "axios";
import { GET_CLOS, DELETE_CLOS, ADD_CLOS } from "./types";
import { tokenConfig } from "./auth";
//GET CLOS

export const getClos = () => (dispatch, getState) => {
  //asy request with axios we are making here
  axios
    .get("http://127.0.0.1:8000/api/clo/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_CLOS, //in action we are passing type action.type
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
//delete clos
export const deleteClos = id => (dispatch, getState) => {
  axios
    .delete("http://localhost:8000/api/clo/" + id, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: DELETE_CLOS,
        payload: id
      });
    })
    .catch(err => console.log(err));
};
//ADD clos
export const addClos = clo => (dispatch, getState) => {
  axios
    .post("http://127.0.0.1:8000/api/clo/", clo, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: ADD_CLOS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
