import { combineReducers } from 'redux';

const topics = (state = [], action) => {
  switch(action.type) {
    case 'GET_TOPICS':
      return action.topics;
    case 'VOTE':
      state.find(topic => {
        if (topic._id === action.id && action.direction === 'up') {
          topic.score += 1;
        } else {
          topic.score -= 1;
        }
        return true;
      });
      return [ ...state ];
    case 'ADD_TOPIC':
      return [ ...state ];
    // case 'DELETE_TOPIC':
    //   state.find(topic => {
    //     if (topic._id === action.id) {

    //     }
    //   })
    default: 
    return state;
  }
}

const reducers = combineReducers({
  topics,
})

export default reducers;