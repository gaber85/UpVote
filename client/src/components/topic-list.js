import React from 'react';
import TopicListItem from './topic-list-item';

class TopicList extends React.Component {
  render() {
    
    return (
      <div className="topicList">
        <TopicListItem />
      </div>
    )
  }
}

export default TopicList;