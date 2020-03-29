import { GET_PLOS, DELETE_PLOS, ADD_PLOS } from "../actions/types";

const intialState = {
  plos: []
};

export default function(state = intialState, action) {
  switch (action.type) {
    case GET_PLOS:
      return {
        ...state,
        plos: action.payload
      };
    case DELETE_PLOS:
      return {
        ...state,
        plos: state.plos.filter(plo => plo.id !== action.payload)
      };
    case ADD_PLOS:
      return {
        ...state,
        plos: [...state.plos, action.payload]
      };

    default:
      return state;
  }
}
