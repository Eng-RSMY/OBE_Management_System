import axios from "axios";
import { GET_PEOS, DELETE_PEOS, ADD_PEOS } from "./types";
import { tokenConfig } from "./auth";
export const getPeos = () => (dispatch, getState) => {
  //asy request with axios we are making here
  console.log(getState);
  axios
    .get("http://127.0.0.1:8000/api/peo/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_PEOS, //in action we are passing type action.type
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
//delete plo
export const deletePeos = id => (dispatch, getState) => {
  axios
    .delete("http://localhost:8000/api/peo/" + id, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: DELETE_PEOS,
        payload: id
      });
    })
    .catch(err => console.log(err));
};
//ADD plo
export const addPeo = peo => (dispatch, getState) => {
  axios
    .post("http://127.0.0.1:8000/api/peo/", peo, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: ADD_PEOS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
