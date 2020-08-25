import workReducer from "./workReducer";
import {reducer as formReducer} from 'redux-form';
import authReducer from "./authReducer";
import chatReducer from "./chatReducer";

const { combineReducers, createStore } = require("redux");

let reducers = combineReducers({
    auth: authReducer,
    workPage: workReducer,
    chatPage: chatReducer,
    form: formReducer
});

let store = createStore(reducers);

window.store = store;

export default store;