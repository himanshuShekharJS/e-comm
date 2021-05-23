import {combineReducers} from 'redux';
import productReducer from './productReducer.js'

 //productReducer:productReducer
const rootReducer = combineReducers({productReducer})

export default rootReducer;