import React from 'react';
import './App.css';
import NewTopic from './components/new-topic';
import TopicList from './components/topic-list';
import { connect } from 'react-redux';
import { voteUp, voteDown } from './redux/actions';

class App extends React.Component {
  state = {
    topics: []
  }

  BASE_URL = 'https://private-anon-3435a9e08c-codemocracy.apiary-mock.com/topics';

  componentDidMount() {
    fetch(this.BASE_URL)
      .then(response => response.json())
      .then(topics => this.setState({topics:topics}))
  }

  render() {

    return (
      <div className="container">
        <NewTopic />
        <TopicList topics={this.state.topics} voteUp={this.props.voteUp} voting={this.props.voting} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  // Map your state to props
  voting: state.voting,
});
const mapDispatchToProps = (dispatch) => ({
  // Map your dispatch actions
  voteUp: () => dispatch(voteUp()),
});

export default connect(
mapStateToProps,
mapDispatchToProps
)(App);
