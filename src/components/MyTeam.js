import React from 'react';

class MyTeam extends React.Component {
  onClick(character) {
    this.props.removeCharacter(character)
  }
  render() {
  return (
      <div>
        {this.props.team.map((character,index) => (
          <div className="team-card">
            <p key={index}>{character.name}</p><button onClick={e => this.onClick(character)}>X</button>
          </div>
          ))}
      </div>
    
  )
 }
}
export default MyTeam;