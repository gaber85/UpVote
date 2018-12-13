export const voteUp = (id) => ({
  type: 'VOTE_UP',
  id: id
});

export const voteDown = (id) => ({
  type: 'VOTE_DOWN',
  id: id
});