import { combineReducers } from 'redux';

const voting = (state = 0, action) => {
  switch(action.type) {
    case 'VOTE_UP':
      return state + 1;
    case 'VOTE_DOWN':
      return state - 1;
    default: 
    return state;
  }
}

const reducers = combineReducers({
  voting
})

export default reducers;