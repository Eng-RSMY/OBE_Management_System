import {
  GET_PEO_VISION,
  ADD_PEO_VISION,
  DELETE_PEO_VISION
} from "../actions/types";

const intialState = {
  peo_visions: []
};

export default function(state = intialState, action) {
  switch (action.type) {
    case GET_PEO_VISION:
      return {
        ...state,
        peo_visions: action.payload
      };

    case DELETE_PEO_VISION:
      return {
        ...state,
        peo_visions: state.peo_visions.filter(
          peo_vision => peo_vision.id !== action.payload
        )
      };
    case ADD_PEO_VISION:
      return {
        ...state,
        peo_visions: [...state.peo_visions, action.payload]
      };

    default:
      return state;
  }
}
