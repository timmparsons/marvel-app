import React from 'react';

const divWrapperStyles = {
  "display": "flex",
  "justifyContent":"space-around"
}

const teamItemStyles = {
  "margin": "auto"
}

class MyTeam extends React.Component {
  onClick(character) {
    this.props.removeCharacter(character)
  }
  render() {
  return (
    <div>
      {this.props.team.length > 0 && <div className="team-container team-container__color">
          <h2>My Team</h2>
          <div className="team-wrapper-container" style={divWrapperStyles}>
          {this.props.team.map((character,index) => (
            <div className="team-card" style={teamItemStyles}>
              <div className="team-card__border">
                <img src={`${character.image}/portrait_xlarge.jpg`} alt="character" className="team-image"/>
                  <div className="team-image-bottom__color">
                    <p key={index} className="team-image-name">{character.name}</p>
                  <div className="team-bg__slidedown">
                    <button className="addRemoveButton" onClick={e => this.onClick(character)}>Remove</button>
                  </div>
                </div>
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