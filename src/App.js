import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount = () => {
    async function listTodos() {
     try {
       console.log(1);
       let response = await fetch('/listTodos', {
         method: 'GET'
       });

       let todos = await response.json()
       console.log(todos);
     } catch (error) {
       console.log(error);
     }
    }

    listTodos()
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
