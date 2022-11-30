import {DECREMENT, INCREMENT} from '../actions_type/counterActionsType';

export const increment = () => ({
  type: INCREMENT,
});
export const decrement = () => ({
  type: DECREMENT,
});
