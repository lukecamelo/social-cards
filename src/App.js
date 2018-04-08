import React, { Component } from 'react';
import './App.css';
import SocialCard from './components/SocialCard/SocialCard';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      bgText: ['Heyoooooo', 'fuck you bitch boy']
    };
  }
  render() {
    return (
      <div className="App">
        <SocialCard 
        text={this.state.bgText[0]}/>
        <SocialCard 
        text={this.state.bgText[1]}/>
      </div>
    );
  }
}

export default App;
