import { GET_PEOS, ADD_PEOS, DELETE_PEOS } from "../actions/types";

const intialState = {
  peos: []
};

export default function(state = intialState, action) {
  switch (action.type) {
    case GET_PEOS:
      return {
        ...state,
        peos: action.payload
      };

    case DELETE_PEOS:
      return {
        ...state,
        peos: state.peos.filter(peo => peo.id !== action.payload)
      };
    case ADD_PEOS:
      return {
        ...state,
        peos: [...state.peos, action.payload]
      };

    default:
      return state;
  }
}
