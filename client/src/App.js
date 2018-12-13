import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="addTopic">
          <form>
            <input type="text" className="input-bar" placeholder="add new topic..."></input>
            <button type="submit" className="accessory-button">+</button>
          </form>
        </div>
        <div className="topicList">
          <div className="topicItem">
            <div className="votingComp">
              <button className="accessory-button">⬆</button>
              <div className="voteCounter">4</div>
              <button className="accessory-button">⬇</button>
            </div>
            <div className="topicInfo">
              <div className="content">Topic content goes here</div>
              <div className="date">Created On <b> Date goes here</b></div>
            </div>
            <div>
              <button className="accessory-button">🗑</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
