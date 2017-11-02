import reducer from "./reducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    lang: reducer
  });

module.exports = rootReducer;