import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { vote, getTopics } from './redux/actions';


class TopicListItem extends React.Component {

  BASE_URL = 'https://localhost:3000/topics';

  componentDidMount() {
    fetch(this.BASE_URL)
      .then(response => response.json())
      .then(topics => this.props.getTopics(topics));
  }

  handlerVote (id, direction) {
    fetch(`${this.BASE_URL}/${id}/${direction}`, {
      method: 'put'
      }
    );
    this.vote(id,direction);
  }

  render() {
    const {topics} = this.props;   
    
    return (
      topics.map(topic => {
        return (
        <div className="topicItem" key={topic._id}>
          <div className="votingComp">
            <button className="accessory-button" onClick={this.handlerVote(topic._id, 'up')}>⬆</button>
            <div className="voteCounter">{this.props.voting}</div>
            <button className="accessory-button" onClick={this.handlerVote(topic._id, 'down')}>⬇</button>
          </div>
          <div className="topicInfo">
            <div className="content">{topic.title}</div>
            <div className="date">Created On <b> {moment(topic.published_at).format('MMM Do')}</b></div>
          </div>
          <div>
            <button className="trash-can accessory-button">🗑</button>
          </div>
        </div>
        )
      })
    )
  }
}

const mapStateToProps = (state) => ({
  // Map your state to props
  topics: state.topics,
});
const mapDispatchToProps = (dispatch) => ({
  // Map your dispatch actions
  vote: (id, direction) => dispatch(vote(id, direction)),
  getTopics: (allTopics) => dispatch(getTopics(allTopics)),
});

export default connect(
mapStateToProps,
mapDispatchToProps
)(TopicListItem);