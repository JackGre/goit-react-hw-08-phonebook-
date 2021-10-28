import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import * as actions from "./contacts-actions";

const contactReducer = createReducer([], {
  [actions.fetchContactsSuccess]: (_, action) => [...action.payload],
});

const loadingReducer = createReducer(false, {
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchContactsError]: () => false,
});

const filterReducer = createReducer("", {
  [actions.updateFilterValue]: (_, action) => action.payload,
});

export const contactsReducer = combineReducers({
  items: contactReducer,
  filter: filterReducer,
  isLoading: loadingReducer,
});