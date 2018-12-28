import { combineReducers } from 'redux';

const topics = (state = [], action) => {
  switch(action.type) {
    case 'GET_TOPICS':
      return action.topics;
    case 'VOTE':
      state.forEach(topic => {
        if (topic._id === action.id && action.direction === 'up') {
          topic.score += 1;
        } else if (topic._id === action.id && action.direction === 'down') {
          topic.score -= 1;
        }
        return topic;
      });
      return [ ...state ].sort((a, b) => b.score - a.score);
    case 'ADD_TOPIC':
      return [
        {
          title: action.title,
          score: action.score,
        },
        ...state,
      ];
    case 'DELETE_TOPIC':
      const newState = state.filter(topic => topic._id !== action.id)
      return [ ...newState ];
    default: 
    return state;
  }
}

const reducers = combineReducers({
  topics,
})

export default reducers;