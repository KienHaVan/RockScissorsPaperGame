import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import counterReducer from '../reducers/counterReducer';

const reducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
