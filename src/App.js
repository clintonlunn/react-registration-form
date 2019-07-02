import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Form } from './Form'


class App extends Component {

  onSubmit = fields => {
    console.log("These are the fields: ", fields);
  }

  render() {
    return (
      <div className="App">
        <Form onSubmit={fields => this.onSubmit(fields)} />
      </div>
    );
  }
}

export default App;
