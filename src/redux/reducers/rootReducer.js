import {combineReducers} from 'redux';
import userReducer from './userReducer.js';
import cartReducer from './cartReducer.js';

const rootReducer = combineReducers({
    userReducer,
    cartReducer
});

export default rootReducer;
