export const vote = (id, direction) => ({
  type: 'VOTE',
  id: id,
  direction: direction,
});

// export const voteDown = (id) => ({
//   type: 'VOTE_DOWN',
//   id: id,
// });

// export const voteDown = (id) => ({
//   type: 'VOTE_DOWN',
//   //id: id
// });



export const getTopics = (allTopics) => ({
  type: 'GET_TOPICS',
  topics: allTopics,
});

// export const deleteTopic = (id) => ({
//   type: 'ADD_TOPIC',
//   id: id,
// });