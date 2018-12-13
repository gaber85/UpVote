import React from 'react';
import TopicListItem from './topic-list-item';

class TopicList extends React.Component {
  render() {
    return (
      <div className="topicList">
        <TopicListItem topics={this.props.topics} />
      </div>
    )
  }
}

export default TopicList;