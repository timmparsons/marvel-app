import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.getCharacter}>
          <input type="text" name="character" placeholder="Character" />
          <button>Get Character</button>
        </form>
      </div>
    )
  }
}

export default Form;  