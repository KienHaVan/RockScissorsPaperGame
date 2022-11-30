import {
  DECREMENT,
  GET_DATA,
  INCREMENT,
  INCREMENT_ASYNC,
  GET_DATA_SUCCESS,
  GET_DATA_FAIL,
} from '../actions_type/counterActionsType';

const initState = {
  count: 0,
  data: [],
  error: '',
};

function counterReducer(state = initState, action) {
  switch (action.type) {
    case INCREMENT:
      return {...state, count: state.count + 1};
    case DECREMENT:
      return {...state, count: state.count - 1};
    case INCREMENT_ASYNC:
      return {...state, data: [action.payload]};
    case GET_DATA:
      return state;
    case GET_DATA_SUCCESS:
      return {...state, data: [action.payload]};
    case GET_DATA_FAIL:
      return {...state, error: action.payload};

    default:
      return state;
  }
}

export default counterReducer;
