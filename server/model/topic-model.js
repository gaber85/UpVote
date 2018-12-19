const mongoose = require('mongoose');

topicSchema = new mongoose.Schema({
  title: String,
  score: Number,
  published_by: {
    type: Date,
    default: Date.now,
  }
});

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;