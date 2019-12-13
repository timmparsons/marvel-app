import React from 'react';
import logo from '../assets/marvel-logo.png'

const logoStyles = {
  "height":"100px"
}
class Titles extends React.Component {
  render() {
    return (
      <div className="title-section">
        <img src={logo} className="logo" style={logoStyles} alt="logo"/>
        <h3>Pick a character</h3>
      </div>
    )
  }
}

export default Titles;