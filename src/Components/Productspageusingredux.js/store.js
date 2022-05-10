import { applyMiddleware,createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { reducer } from "./Reducerredux";

const combinereducers = combineReducers({productsdata : reducer})
export const store = createStore(combinereducers,applyMiddleware(thunk))