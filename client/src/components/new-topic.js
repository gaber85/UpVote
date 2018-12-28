import React from 'react';
import { addNewTopic, getTopics } from '../redux/actions';
import { connect } from 'react-redux';

class NewTopic extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      title: '',
    };
  }

  BASE_URL = 'http://localhost:3000/topics';

  updateNewTopic = e => {
    this.setState({ title: e.target.value});
  }

  handleSubmit = () => {
    if (this.state.title) {
      fetch(this.BASE_URL, {
        method: 'post',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(fetch(this.BASE_URL)
        .then(response => response.json())
        .then(topics => this.props.getTopics(topics))
      );
    }
  }

  submit = (e) => {
    e.preventDefault();
    this.handleSubmit();
    this.setState({
      title: '',
    })
  }

  render() {
    return (
      <div className="addTopic">
        <form className="grow" onSubmit={this.submit}>
          <input type="text" 
            className="input-bar" 
            placeholder="add new topic..."
            onChange={this.updateNewTopic}
            value={this.state.title}></input>
          <button type="submit" 
            className="accessory-button"
            onClick={this.handleSubmit}>+</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  topics: state.topics,
});

const mapDispatchToProps = (dispatch) => ({
  addNewTopic: (content) => dispatch(addNewTopic(content)),
  getTopics: (allTopics) => dispatch(getTopics(allTopics)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewTopic);