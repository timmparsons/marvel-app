import React from 'react';


class Character extends React.Component {
  onClick(member) {
    this.props.addToTeam(member)
  }
  render() {
  return (
    <div>
      {this.props.character.name && 
        <div className="character-tile">
          <h2>{this.props.character.name}</h2>
          <p>{this.props.character.description}</p>
          <img src={`${this.props.character.thumbnail.path}/portrait_xlarge.jpg`} alt="character"/>
          <div>
            <button value={this.props.character.id} className="addRemoveButton" onClick={e => this.onClick(this.props.character)}>Add to Team</button>
          </div>
        </div>
      }
    </div>  
  )
}
}


export default Character;