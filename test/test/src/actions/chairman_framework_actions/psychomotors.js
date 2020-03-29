import axios from "axios";
import {
  GET_Psychomotor_Domain,
  DELETE_Psychomotor_Domain,
  ADD_Psychomotor_Domain
} from "../types";
import { tokenConfig } from "../auth";
export const getPsychomotor = () => (dispatch, getState) => {
  //asy request with axios we are making here
  console.log(getState);
  axios
    .get("http://127.0.0.1:8000/api/Psychomotor/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_Psychomotor_Domain, //in action we are passing type action.type
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
//delete plo
export const deletePsychomotor = id => (dispatch, getState) => {
  axios
    .delete(
      "http://localhost:8000/api/Psychomotor/" + id,
      tokenConfig(getState)
    )
    .then(res => {
      dispatch({
        type: DELETE_Psychomotor_Domain,
        payload: id
      });
    })
    .catch(err => console.log(err));
};
//ADD plo
export const addPsychomotor = psychomotor => (dispatch, getState) => {
  axios
    .post(
      "http://127.0.0.1:8000/api/Psychomotor/",
      psychomotor,
      tokenConfig(getState)
    )
    .then(res => {
      dispatch({
        type: ADD_Psychomotor_Domain,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
