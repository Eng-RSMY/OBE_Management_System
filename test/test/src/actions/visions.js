import axios from "axios";
import { GET_VISIONS, DELETE_VISIONS, ADD_VISIONS } from "./types";
import { tokenConfig } from "./auth";

//get visions
export const getVisions = () => (dispatch, getState) => {
  axios
    .get("http://127.0.0.1:8000/api/vision/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_VISIONS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
//delete vision
export const deleteVisions = id => (dispatch, getState) => {
  axios
    .delete("http://localhost:8000/api/vision/" + id, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: DELETE_VISIONS,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

//ADD visions
export const addVision = vision => (dispatch, getState) => {
  console.log(vision);
  axios
    .post("http://127.0.0.1:8000/api/vision/", vision, tokenConfig(getState))
    .then(res => {
      console.log("ok");
      dispatch({
        type: ADD_VISIONS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
