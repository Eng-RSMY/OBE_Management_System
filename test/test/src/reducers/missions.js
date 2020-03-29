import { GET_MISSIONS, DELETE_MISSIONS, ADD_MISSIONS } from "../actions/types";

const intialState = {
  missions: []
};

export default function(state = intialState, action) {
  switch (action.type) {
    case GET_MISSIONS:
      return {
        ...state,
        missions: action.payload
      };
    case DELETE_MISSIONS:
      return {
        ...state,
        missions: state.missions.filter(
          mission => mission.id !== action.payload
        )
      };

    case ADD_MISSIONS:
      return {
        ...state,
        missions: [...state.missions, action.payload]
      };
    default:
      return state;
  }
}
