import axios from "axios";
import {
  GET_Cognitive_Domain,
  DELETE_Cognitive_Domain,
  ADD_Cognitive_Domain
} from "../types";
import { tokenConfig } from "../auth";
export const getCongitive = () => (dispatch, getState) => {
  //asy request with axios we are making here
  console.log(getState);
  axios
    .get("http://127.0.0.1:8000/api/Cognitive/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_Cognitive_Domain, //in action we are passing type action.type
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
//delete plo
export const deleteCongitive = id => (dispatch, getState) => {
  axios
    .delete("http://localhost:8000/api/Cognitive/" + id, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: DELETE_Cognitive_Domain,
        payload: id
      });
    })
    .catch(err => console.log(err));
};
//ADD plo
export const addCongitive = congitive => (dispatch, getState) => {
  axios
    .post(
      "http://localhost:8000/api/Cognitive/",
      congitive,
      tokenConfig(getState)
    )
    .then(res => {
      dispatch({
        type: ADD_Cognitive_Domain,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
