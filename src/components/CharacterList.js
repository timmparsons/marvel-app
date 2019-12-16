import React from 'react';
import axios from 'axios';
import md5 from 'md5';

const listColor = {
  "color":"white"
}

class CharacterList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
  }
  componentDidMount(){
    let baseUrl = `https://gateway.marvel.com/v1/public/characters?`
    const publicKey = "f8ad949f605c15a6d46e8fe3d0a348fe"
    const privateKey = "42a0734d132d836a5dce3b386b8e70f76478827d"
    const ts = 1;
    const stringToHash = ts + privateKey + publicKey;
    const hash = md5(stringToHash);
    const url = baseUrl + '&ts=' + ts + '&apikey=' + publicKey + '&hash=' + hash;
  
    axios.get(url)
      .then(response => {
        console.log(response.data.data.results)
        let charList = response.data.data.results
        this.setState({
          data: charList
        })
      })
      .catch(error => console.log(error))  
    }
  render() {
    const {data} = this.state;
    return (
    <ul>
      {data.map(char => 
        <li key={char.id} style={listColor}>{char.name}</li>)}
    </ul>
    )
  }
}

export default CharacterList;