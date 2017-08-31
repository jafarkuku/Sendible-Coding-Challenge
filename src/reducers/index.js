import { combineReducers } from 'redux';

//Getting the initial state
import items from './reducer_itemList';

const rootReducer = combineReducers({
  items
})

export default rootReducer;
