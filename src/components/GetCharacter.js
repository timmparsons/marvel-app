import React from 'react';
import axios from 'axios';
import md5 from 'md5';
import Form from './Form';
import Titles from'./Titles';
import Character from './Character';
import MyTeam from './MyTeam';

class GetCharacter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      character: [],
      team: []
    }

    //this.addToTeam = this.addToTeam.bind(this);
  }

addToTeam = (event) => {
  let newMember = {
    id: event.id,
    name: event.name
  }
  let currentTeam = this.state.team.slice(0);
  currentTeam.push(newMember);
  this.setState({team: currentTeam})
}

removeCharacter = (character) => {
  let newTeam = this.state.team.filter(char => {
    return char !== character
  })
  this.setState({
    team: newTeam
  })
  console.log(this.state.team)
}
getCharacter = (event) => {
  event.preventDefault();
  let character = event.target.elements.character.value;
  let baseUrl = `https://gateway.marvel.com/v1/public/characters?name=${character}`
  const publicKey = "f8ad949f605c15a6d46e8fe3d0a348fe"
  const privateKey = "42a0734d132d836a5dce3b386b8e70f76478827d"
  const ts = 1;
  const stringToHash = ts + privateKey + publicKey;
  const hash = md5(stringToHash);
  const url = baseUrl + '&ts=' + ts + '&apikey=' + publicKey + '&hash=' + hash;

  axios.get(url)
    .then(response => {
      const data = response.data.data.results[0]
      console.log(data)
      this.setState({
        character: data
      })
    })
    .catch(error => console.log(error))  
  }
  render() {
    const {character} = this.state;
    return (
        <div className="input-section">
          <Titles />
          <Form value={this.state.name} getCharacter={this.getCharacter}/> 
          <Character 
            character={character}
            addToTeam={this.addToTeam}/>
          <MyTeam 
            team ={this.state.team}
            removeCharacter={this.removeCharacter}/>
        </div>
      )
  }
}

export default GetCharacter