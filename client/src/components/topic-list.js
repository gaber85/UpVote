import React from 'react';
import TopicListItem from './topic-list-item';

class TopicList extends React.Component {
  render() {
    
    return (
      <div className="topicList" key={'001'}>
        <TopicListItem />
      </div>
    )
  }
}

export default TopicList;