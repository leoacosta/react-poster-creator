import React, { Component } from 'react';
import CreatePosterForm from './components/CreatePosterForm';
import Poster from './components/Poster'

class App extends Component {
  
  state = {
    title: "",
    subtitle: "",
    image: ""
  }

  render() {
    return (
      <React.Fragment>
        <CreatePosterForm />
        <Poster cardCat="Tango" posterTitle="Buenos Aires" />
      </React.Fragment>
    );
  }
}

export default App;
