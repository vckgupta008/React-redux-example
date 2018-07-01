import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";

import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";
import todo from "./reducers/todoReducer";

export default createStore(
    combineReducers({
        math,
        user,
        todo
    }),
    {},
    applyMiddleware(logger())
);