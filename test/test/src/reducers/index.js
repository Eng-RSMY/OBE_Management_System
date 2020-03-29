import { combineReducers } from "redux";
import visions from "./visions";
import clos from "./clos";
import plos from "./plos";
import subjects from "./subjects";
import peos from "./peos";
import missions from "./missions";
import auth from "./auth";
import peo_visions from "./peo_vision";
import peomissions from "./peomission";
import cognitives from "./chairman_framework_reducers/cognitive";
import affectives from "./chairman_framework_reducers/affectives";
import psychomotors from "./chairman_framework_reducers/psychomotors";
export default combineReducers({
  peomissions,
  peo_visions,
  visions,
  clos,
  plos,
  subjects,
  peos,
  missions,
  cognitives,
  psychomotors,
  affectives,
  auth
});
