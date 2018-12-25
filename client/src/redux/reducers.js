import { combineReducers } from 'redux';

const topics = (state = [], action) => {
  switch(action.type) {
    case 'GET_TOPICS':
      return action.topics;
    case 'VOTE':
      state.find(topic => {
        if (topic._id === action.id && action.direction === 'up') {
          topic.score += 1;
        } else if (topic._id === action.id && action.direction === 'down') {
          topic.score -= 1;
        }
        return topic;
      });
      return [ ...state ];
    case 'ADD_TOPIC':
      return [
        {
          title: action.title,
        },
        ...state,
      ];
    default: 
    return state;
  }
}

const reducers = combineReducers({
  topics,
})

export default reducers;