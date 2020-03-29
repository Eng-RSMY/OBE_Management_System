import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from "../actions/types";

const intialState = {
  token: null,
  is_admin: false,
  is_chairman: false,
  is_depHead: false,
  is_student: false,
  is_teacher: false,
  isAuthenticated: null,
  isLoading: false,
  user: null
};

export default function(state = intialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        is_admin: action.payload.is_admin,
        is_chairman: action.payload.is_chairman,
        is_depHead: action.payload.is_depHead,
        is_teacher: action.payload.is_teacher,
        is_student: action.payload.is_student,
        token: action.token,
        isLoading: false
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
      //localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        is_admin: false,
        is_chairman: false,
        is_depHead: false,
        is_teacher: false,
        is_student: false,

        isLoading: false
      };

    default:
      return state;
  }
}
