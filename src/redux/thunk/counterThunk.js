import {
  GET_DATA,
  GET_DATA_FAIL,
  GET_DATA_SUCCESS,
  INCREMENT_ASYNC,
} from '../actions_type/counterActionsType';

export const incrementAsync = () => async dispatch => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await data.json();
  dispatch({
    type: INCREMENT_ASYNC,
    payload: posts,
  });
};
export const getData = () => async dispatch => {
  dispatch({type: GET_DATA});
  try {
    const data = await fetch('hts://jsonplaceholder.typicode.com/posts');
    const posts = await data.json();
    dispatch({
      type: GET_DATA_SUCCESS,
      payload: posts,
    });
  } catch (error) {
    dispatch({
      type: GET_DATA_FAIL,
      payload: error,
    });
  }
};
