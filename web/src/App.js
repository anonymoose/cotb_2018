import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import ken from './ken.jpg';
import chuck from './chuck.jpg';
import './App.css';

// const URL_BASE = "http://localhost:8080";
const URL_BASE = "https://zu96jwihe7.execute-api.us-east-1.amazonaws.com/dev";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ken} className="App-logo" alt="ken" />
          <img src={chuck} className="App-logo" alt="chuck" />          
          <h1 className="App-title">Ken &gt; Chuck</h1>
        </header>
        <p className="App-intro">
          Click the button below to get a random joke.
        </p>
        <JokeButton/>
      </div>
    );
  }
}


class JokeButton extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      joke: null
    };
  }

  handleClick = () => {
    fetch(`${URL_BASE}/jokes/random`,
          {
            method: 'GET',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
          }
    )
    .then(res => res.json())
    .then(
      (joke) => {
        this.setState({
          joke: decodeURI(joke.value)
        });
      },
    )
  }

  render() {
    const { joke } = this.state;

    return (
      <div>
        <Button
          bsStyle="primary"
          onClick={this.handleClick}>Go!</Button>
          <br/> <br/>
        <h3 dangerouslySetInnerHTML={{__html: joke}}/>
      </div>
    );
  }
}

export default App;
