export const voteUp = (id) => ({
  type: 'VOTE_UP',
  //id: id
});

export const voteDown = (id) => ({
  type: 'VOTE_DOWN',
  //id: id
});

export const addTopic = (content) => ({
  type: 'ADD_TOPIC',
  title: content
});

export const deleteTopic = (id) => ({
  type: 'ADD_TOPIC',
  id: id
});