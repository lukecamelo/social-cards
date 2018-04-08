import React, { Component } from 'react';
import './App.css';
import SocialCard from './components/SocialCard/SocialCard';
import CardList from './components/CardList/CardList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      bgText: ['Striving every day to be a better dev.', 'mic check mic check mic check mic check mic'],
      userName: ['luke camelo', 'john egbert']
    };
  }


  render() {

    // TODO implement somehow??
    const textChangeHandler = (event, id) => {
      const textIndex = this.state.bgText.findIndex(t => {
        return t.id === id;
      });

      const text = {
        ...this.state.bgText[textIndex]
      };

      text.bgText = event.target.value;

      const bgText = [...this.state.bgText];

      bgText[textIndex] = text;
      this.setState({bgText: bgText})
    }

    return (
      <div className="App">
        <SocialCard 
        text={this.state.bgText[0]}
        name={this.state.userName[0]} />
        <SocialCard 
        text={this.state.bgText[1]}
        name={this.state.userName[1]}/>
      </div>
    );
  }
}

export default App;
