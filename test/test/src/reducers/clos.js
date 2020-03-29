import { GET_CLOS, DELETE_CLOS, ADD_CLOS } from "../actions/types";

const intialState = {
  clos: []
};

export default function(state = intialState, action) {
  switch (action.type) {
    case GET_CLOS:
      return {
        ...state,
        clos: action.payload
      };
    case DELETE_CLOS:
      return {
        ...state,
        clos: state.clos.filter(clo => clo.id !== action.payload)
      };
    case ADD_CLOS:
      return {
        ...state,
        clos: [...state.clos, action.payload]
      };

    default:
      return state;
  }
}
