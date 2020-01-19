import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import content from './reducers/note';
import settings from './reducers/settings';

const rootReducer = combineReducers({
  content,
  settings
});


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;