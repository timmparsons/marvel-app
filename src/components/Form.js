import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.getCharacter}>
          <input type="text" name="character" placeholder="Character" />
          <button>Find your character</button>
        </form>
      </div>
    )
  }
}

export default Form;  