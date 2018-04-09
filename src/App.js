import React, { Component } from 'react';
import './App.css';
import SocialCard from './components/SocialCard/SocialCard';
import CardList from './components/CardList/CardList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards: [
        {id: 1, bgText: 'so and so and so blah blah text', userName: 'luke camelo'},
        {id: 2, bgText: 'mic check mic check say what word', userName: 'john egbert'},
        {id: 3, bgText: 'who what when where why how oh okay', userName: 'peepo sugardip'}
      ]
    };
  }


  render() {

    // TODO implement somehow??
    // const textChangeHandler = (event, id) => {
    //   const textIndex = this.state.bgText.findIndex(t => {
    //     return t.id === id;
    //   });

    //   const text = {
    //     ...this.state.bgText[textIndex]
    //   };

    //   text.bgText = event.target.value;

    //   const bgText = [...this.state.bgText];

    //   bgText[textIndex] = text;
    //   this.setState({bgText: bgText})
    // }

    return (
      <div className="App">
        <SocialCard 
        text={this.state.cards[0].bgText}
        name={this.state.cards[0].userName} />
        <SocialCard 
        text={this.state.cards[1].bgText}
        name={this.state.cards[1].userName}/>
        <SocialCard 
        text={this.state.cards[2].bgText}
        name={this.state.cards[2].userName}/>

      </div>
    );
  }
}

export default App;
