import React from 'react';

class NewTopic extends React.Component {
  render() {
    return (
      <div className="addTopic">
        <form className="grow">
          <input type="text" className="input-bar" placeholder="add new topic..."></input>
          <button type="submit" className="accessory-button">+</button>
        </form>
      </div>
    )
  }
}

export default NewTopic;