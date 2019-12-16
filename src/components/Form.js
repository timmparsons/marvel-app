import React from 'react';

const findButton = {
    "width": "50%",
    "backgroundColor": "#ed151e",
    "color": "white",
    "fontSize": "20px",
    "padding": "14px 20px",
    "margin": "8px 0",
    "border": "none",
    "borderRadius": "4px",
    "cursor": "pointer"
}

class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.getCharacter}>
          <input type="text" name="character" placeholder="Enter character here..." className="form"/>
          <div>
          <button className="find-button" style={findButton}>Find your character</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Form;  