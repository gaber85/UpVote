export const vote = (id, direction) => ({
  type: 'VOTE',
  id: id,
  direction: direction,
});

export const addNewTopic = (content) => ({
  type: 'ADD_TOPIC',
  title: content,
});

export const getTopics = (allTopics) => ({
  type: 'GET_TOPICS',
  topics: allTopics,
});

export const deleteTopic = (id) => ({
  type: 'DELETE_TOPIC',
  id: id,
});