import { applyMiddleware, compose, createStore } from "redux";
import reducer from "./reducer";
import thunk from 'redux-thunk';

const middlewares = [thunk]

const store = createStore(
    reducer,
    compose(
        applyMiddleware(...middlewares),
    )
)

export default store;