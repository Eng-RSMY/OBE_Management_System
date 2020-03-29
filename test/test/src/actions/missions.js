import axios from "axios";
import { GET_MISSIONS, DELETE_MISSIONS, ADD_MISSIONS } from "./types";
import { tokenConfig } from "./auth";

//get visions
export const getMissions = () => (dispatch, getState) => {
  axios
    .get("http://127.0.0.1:8000/api/mission/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_MISSIONS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
//delete vision
export const deleteMissions = id => (dispatch, getState) => {
  axios
    .delete("http://localhost:8000/api/mission/" + id, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: DELETE_MISSIONS,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

//ADD visions
export const addMission = mission => (dispatch, getState) => {
  axios
    .post("http://127.0.0.1:8000/api/mission/", mission, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: ADD_MISSIONS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
