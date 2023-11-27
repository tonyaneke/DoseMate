import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import userReducer from "./userSlice";
import doctorReducer from "./doctorSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  doctor: doctorReducer,
});

export default rootReducer;
