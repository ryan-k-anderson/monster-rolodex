import React from 'react'
import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
  
    this.state = {
      name: {firstname: 'Ryan', lastname: 'Anderson'},
      company: "Cynder Developments"
    }
  }

render() {
    return (
      <div className="App">
      <p>Hi {this.state.name.firstname} {this.state.name.lastname}, I work at {this.state.company}</p>
      <button
      onClick={() => {
        this.setState(() => {
          return{
            name: {firstname:'Elijah', lastname: 'Kugler'},
          };
        },
        () =>{
          console.log(this.state)
        }
        );
      }}
      >
      Change Name
      </button>
      </div>
    );
  }
}

export default App;
