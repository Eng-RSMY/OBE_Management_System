import axios from "axios";
import { GET_SUBJECTS, DELETE_SUBJECTS, ADD_SUBJECTS } from "./types";
import { tokenConfig } from "./auth";
export const getSubjects = () => (dispatch, getState) => {
  //asy request with axios we are making here
  axios
    .get("http://127.0.0.1:8000/api/courses/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_SUBJECTS, //in action we are passing type action.type
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

//delete subject
export const deleteSubjects = id => (dispatch, getState) => {
  axios
    .delete("http://localhost:8000/api/courses/" + id, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: DELETE_SUBJECTS,
        payload: id
      });
    })
    .catch(err => console.log(err));
};
//ADD subjects
export const addSubject = subject => (dispatch, getState) => {
  axios
    .post("http://127.0.0.1:8000/api/courses/", subject, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: ADD_SUBJECTS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
