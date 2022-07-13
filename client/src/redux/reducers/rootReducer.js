import { combineReducers } from 'redux';
import { categoryReduser } from './categoryReduser';


export const rootReducer = combineReducers({
//  user: userReducer
category: categoryReduser
})
