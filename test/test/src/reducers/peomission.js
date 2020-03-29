import {
  GET_PEO_MISSION,
  ADD_PEO_MISSION,
  DELETE_PEO_MISSION
} from "../actions/types";

const intialState = {
  peomissions: []
};

export default function(state = intialState, action) {
  switch (action.type) {
    case GET_PEO_MISSION:
      return {
        ...state,
        peomissions: action.payload
      };

    case DELETE_PEO_MISSION:
      return {
        ...state,
        peomissions: state.peos.filter(
          peomission => peomission.id !== action.payload
        )
      };
    case ADD_PEO_MISSION:
      return {
        ...state,
        peomission: [...state.peos, action.payload]
      };

    default:
      return state;
  }
}
