import React from 'react';
import moment from 'moment';

class TopicListItem extends React.Component {

  render() {
    const {topics} = this.props;   
    console.log('this PROPS',this.props);
    
    return (
      topics.map(topic => {
        return (
        <div className="topicItem" key={topic._id}>
          <div className="votingComp">
            <button className="accessory-button" onClick={() => this.props.voteUp()}>⬆</button>
            <div className="voteCounter">{this.props.voting}</div>
            <button className="accessory-button">⬇</button>
          </div>
          <div className="topicInfo">
            <div className="content">{topic.title}</div>
            <div className="date">Created On <b> {moment(topic.published_at).format('MMM Do')}</b></div>
          </div>
          <div>
            <button className="accessory-button">🗑</button>
          </div>
        </div>
        )
      })
    )
  }
}

export default TopicListItem;