import { GET_VISIONS, DELETE_VISIONS, ADD_VISIONS } from "../actions/types";

const intialState = {
  visions: []
};

export default function(state = intialState, action) {
  switch (action.type) {
    case GET_VISIONS:
      return {
        ...state,
        visions: action.payload
      };
    case DELETE_VISIONS:
      return {
        ...state,
        visions: state.visions.filter(vision => vision.id !== action.payload)
      };

    case ADD_VISIONS:
      return {
        ...state,
        visions: [...state.visions, action.payload]
      };
    default:
      return state;
  }
}
