import axios from "axios";
import {
  GET_Affective_Domain,
  DELETE_Affective_Domain,
  ADD_Affective_Domain
} from "../types";
import { tokenConfig } from "../auth";
export const getAffective = () => (dispatch, getState) => {
  //asy request with axios we are making here
  console.log(getState);
  axios
    .get("http://127.0.0.1:8000/api/Affective/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_Affective_Domain, //in action we are passing type action.type
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
//delete plo
export const deleteAffective = id => (dispatch, getState) => {
  axios
    .delete("http://localhost:8000/api/Affective/" + id, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: DELETE_Affective_Domain,
        payload: id
      });
    })
    .catch(err => console.log(err));
};
//ADD plo
export const addAffective = affective => (dispatch, getState) => {
  axios
    .post(
      "http://127.0.0.1:8000/api/Affective/",
      affective,
      tokenConfig(getState)
    )
    .then(res => {
      dispatch({
        type: ADD_Affective_Domain,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
