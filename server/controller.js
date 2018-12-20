const Topic = require('./model/topic-model');

exports.getAll = async (ctx) => {
  try {
    const topic = await Topic.find().sort({score: -1});
    ctx.body = topic;
  } catch (err) {
    ctx.status = 500;
    ctx.body = {
      error: JSON.stringify(err)
    };
  }
};

exports.createNew = async (ctx) => {
  try {
    const { title } = ctx.request.body;
    const newTopic = await new Topic({
      title,
      score: 0,
    });
    newTopic.save((err) => {
      if (err) return console.error(err); // eslint-disable-line no-console
    });
    ctx.body = newTopic;
    ctx.status = 201;
  } catch (err) {
    if (err) {
      ctx.status = 500;
      ctx.body = {
        error: JSON.stringify(err)
      };
    }
  }
};

exports.deleteTopic = async (ctx) => {
  try {
    const id = ctx.params.id;
    await Topic.findOneAndDelete({_id: id}, (err, doc) => {
      if (err) {
        console.log('something went wrong deleting topic'); // eslint-disable-line no-console
      }
      ctx.status = 200; // what is the right status after deleting something?
      ctx.body = {successfully_deleted: doc};
    });
  } catch (err) {
    if (err) {
      ctx.status = 500;
      ctx.body = {
        error: JSON.stringify(err)
      };
    }
  }
};

exports.vote = async (ctx) => {
  try {
    const id = ctx.params.id;
    const direction = ctx.params.direction;
    direction === 'up' ? await Topic.findOneAndUpdate({ _id : id }, {$inc : { score : 1}})
      : await Topic.findOneAndUpdate({ _id : id }, {$inc : { score : -1}});
    ctx.body = 'Voted';
  } catch (err) {
    ctx.status = 500;
    ctx.body = {
      error: JSON.stringify(err)
    };
  }
};