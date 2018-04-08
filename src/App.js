import React, { Component } from 'react';
import './App.css';
import SocialCard from './components/SocialCard/SocialCard';
import CardList from './components/CardList/CardList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      bgText: ['social card', 'mic check'],
      userName: ['luke camelo', 'john egbert']
    };
  }
  render() {
    return (
      <div className="App">
        <SocialCard 
        text={this.state.bgText[0]}
        name={this.state.userName[0]}/>
        <SocialCard 
        text={this.state.bgText[1]}
        name={this.state.userName[1]}/>
      </div>
    );
  }
}

export default App;
