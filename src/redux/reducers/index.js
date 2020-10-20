import {combineReducers} from 'redux';
import postReducer from './postReducer';

const reducer = combineReducers({
   posts: postReducer
});
export default (states,action) => reducer(states,action)
