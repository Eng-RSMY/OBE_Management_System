import { GET_SUBJECTS, DELETE_SUBJECTS, ADD_SUBJECTS } from "../actions/types";

const intialState = {
  subjects: []
};

export default function(state = intialState, action) {
  switch (action.type) {
    case GET_SUBJECTS:
      return {
        ...state,
        subjects: action.payload
      };
    case DELETE_SUBJECTS:
      return {
        ...state,
        subjects: state.subjects.filter(
          subject => subject.id !== action.payload
        )
      };
    case ADD_SUBJECTS:
      return {
        ...state,
        subjects: [...state.subjects, action.payload]
      };
    default:
      return state;
  }
}
