import axios from "axios";
import { GET_PEO_VISION, DELETE_PEO_VISION, ADD_PEO_VISION } from "./types";
import { tokenConfig } from "./auth";
export const getPeo_Visions = () => dispatch => {
  //asy request with axios we are making here
  axios
    .get("http://127.0.0.1:8000/api/vision_peo/")
    .then(res => {
      // console.log(res); to check my frontend api
      dispatch({
        type: GET_PEO_VISION, //in action we are passing type action.type
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
//delete plo
export const deletePeo_Visions = id => dispatch => {
  axios
    .delete("http://localhost:8000/api/vision_peo/" + id)
    .then(res => {
      dispatch({
        type: DELETE_PEO_VISION,
        payload: id
      });
    })
    .catch(err => console.log(err));
};
//ADD plo
export const addPeoVision = peo_vision => dispatch => {
  console.log(peo_vision);
  axios
    .post("http://127.0.0.1:8000/api/vision_peo/", peo_vision)
    .then(res => {
      dispatch({
        type: ADD_PEO_VISION,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
