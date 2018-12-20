import React from 'react';
import './App.css';
import NewTopic from './components/new-topic';
import TopicList from './components/topic-list';
import { connect } from 'react-redux';

class App extends React.Component {

  render() {

    return (
      <div className="container">
        <NewTopic />
        <TopicList />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  // Map your state to props
  topics: state.topics,
});
const mapDispatchToProps = (dispatch) => ({
  // Map your dispatch actions
});

export default connect(
mapStateToProps,
mapDispatchToProps
)(App);
