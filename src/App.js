import React, { Component } from 'react';
import CreatePosterForm from './components/CreatePosterForm';
import Poster from './components/Poster';

class App extends Component {
  state = {
    title: '',
    subtitle: '',
    image: ''
  };

  // Change state based on values entered
  handleValueChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <CreatePosterForm handleValueChange={this.handleValueChange} />
        <Poster
          title={this.state.title}
          subtitle={this.state.subtitle}
          image={this.state.image}
        />
      </div>
    );
  }
}

export default App;
