export const vote = (id, direction) => ({
  type: 'VOTE',
  id: id,
  direction: direction,
});

export const addNewTopic = (title, score) => ({
  type: 'ADD_TOPIC',
  title: title,
  score: score,
});

export const getTopics = (allTopics) => ({
  type: 'GET_TOPICS',
  topics: allTopics,
});

export const deleteTopic = (id) => ({
  type: 'DELETE_TOPIC',
  id: id,
});