import { combineReducers } from "@reduxjs/toolkit";

import auth from "./reducers/auths.slice";
import role from "./reducers/Role/role.slice";
export function createReducer(injectedReducers) {
  return combineReducers({
    ...injectedReducers,
    auth,
    role,
  });
}
