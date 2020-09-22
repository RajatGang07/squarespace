import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import credentialReducer from "./reducers/credentialReducer";
import questionReducer from "./reducers/questionReducer";

const rootReducer = combineReducers({
  credential: credentialReducer,
  question: questionReducer
});


const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk, logger));
};

export default configureStore;
