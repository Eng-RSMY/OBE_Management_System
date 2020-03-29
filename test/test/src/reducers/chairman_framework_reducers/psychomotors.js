import {
  GET_Psychomotor_Domain,
  ADD_Psychomotor_Domain,
  DELETE_Psychomotor_Domain
} from "../../actions/types";

const intialState = {
  psychomotors: []
};

export default function(state = intialState, action) {
  switch (action.type) {
    case GET_Psychomotor_Domain:
      return {
        ...state,
        psychomotors: action.payload
      };

    case DELETE_Psychomotor_Domain:
      return {
        ...state,
        psychomotors: state.psychomotors.filter(
          psychomotor => psychomotor.id !== action.payload
        )
      };
    case ADD_Psychomotor_Domain:
      return {
        ...state,
        psychomotors: [...state.psychomotors, action.payload]
      };

    default:
      return state;
  }
}
