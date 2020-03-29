import {
  GET_Affective_Domain,
  ADD_Affective_Domain,
  DELETE_Affective_Domain
} from "../../actions/types";

const intialState = {
  affectives: []
};

export default function(state = intialState, action) {
  switch (action.type) {
    case GET_Affective_Domain:
      return {
        ...state,
        affectives: action.payload
      };

    case DELETE_Affective_Domain:
      return {
        ...state,
        affectives: state.affectives.filter(
          affective => affective.id !== action.payload
        )
      };
    case ADD_Affective_Domain:
      return {
        ...state,
        affectives: [...state.affectives, action.payload]
      };

    default:
      return state;
  }
}
