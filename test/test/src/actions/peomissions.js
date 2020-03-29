import axios from "axios";
import { GET_PEO_MISSION, ADD_PEO_MISSION, DELETE_PEO_MISSION } from "./types";
import { tokenConfig } from "./auth";
export const getPeoMissions = () => (dispatch, getState) => {
  //asy request with axios we are making here
  axios
    .get("http://127.0.0.1:8000/api/peomission/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_PEO_MISSION, //in action we are passing type action.type
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
//delete plo
export const deletePeoMissions = id => (dispatch, getState) => {
  axios
    .delete("http://localhost:8000/api/peomission/" + id, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: DELETE_PEO_MISSION,
        payload: id
      });
    })
    .catch(err => console.log(err));
};
//ADD plo
export const addPeoMission = peomission => (dispatch, getState) => {
  axios
    .post(
      "http://127.0.0.1:8000/api/peomission/",
      peomission,
      tokenConfig(getState)
    )
    .then(res => {
      dispatch({
        type: ADD_PEO_MISSION,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
