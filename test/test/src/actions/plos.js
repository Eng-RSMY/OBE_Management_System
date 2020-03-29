import axios from "axios";
import { GET_PLOS, DELETE_PLOS, ADD_PLOS } from "./types";
import { tokenConfig } from "./auth";
export const getPlos = () => (dispatch, getState) => {
  //asy request with axios we are making here
  axios
    .get("http://127.0.0.1:8000/api/plo/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_PLOS, //in action we are passing type action.type
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
//delete plo
export const deletePlos = id => (dispatch, getState) => {
  axios
    .delete("http://localhost:8000/api/plo/" + id, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: DELETE_PLOS,
        payload: id
      });
    })
    .catch(err => console.log(err));
};
//ADD plo
export const addPlo = plo => (dispatch, getState) => {
  axios
    .post("http://127.0.0.1:8000/api/plo/", plo, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: ADD_PLOS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
