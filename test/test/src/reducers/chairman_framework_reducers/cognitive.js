import {
  GET_Cognitive_Domain,
  ADD_Affective_Domain,
  DELETE_Cognitive_Domain
} from "../../actions/types";

const intialState = {
  cognitives: []
};

export default function(state = intialState, action) {
  switch (action.type) {
    case GET_Cognitive_Domain:
      return {
        ...state,
        cognitives: action.payload
      };

    case DELETE_Cognitive_Domain:
      return {
        ...state,
        cognitives: state.cognitives.filter(
          cognitive => cognitive.id !== action.payload
        )
      };
    case ADD_Affective_Domain:
      return {
        ...state,
        cognitives: [...state.cognitives, action.payload]
      };

    default:
      return state;
  }
}
