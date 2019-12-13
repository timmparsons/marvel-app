import React from 'react';

const divWrapperStyles = {
  "display": "flex",
  "justifyContent":"space-around"
}

const teamItemStyles = {
  "border": "1px solid red",
  "margin": "auto",
  "padding": "30px"
}

class MyTeam extends React.Component {
  onClick(character) {
    this.props.removeCharacter(character)
  }
  render() {
  return (
    <div>
      {this.props.team.length > 0 && <div className="team-container team-container__color">
          <h3>My Team</h3>
          <div className="team-wrapper-container" style={divWrapperStyles}>
          {this.props.team.map((character,index) => (
            <div className="team-card" style={teamItemStyles}>
              <p key={index}>{character.name}</p>
              <img src={`${character.image}/landscape_amazing.jpg`} alt="character"/>
              <div>
                <button className="addRemoveButton" onClick={e => this.onClick(character)}>Remove</button>
              </div>
            </div>
            ))}
        </div>
      </div>
      }
    </div>   
    )
  }
}
export default MyTeam;