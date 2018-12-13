import React from 'react';
import TopicListItem from './topic-list-item';

class TopicList extends React.Component {
  render() {
    
    return (
      <div className="topicList">
        <TopicListItem topics={this.props.topics} voteUp={this.props.voteUp} voting={this.props.voting} />
      </div>
    )
  }
}

export default TopicList;