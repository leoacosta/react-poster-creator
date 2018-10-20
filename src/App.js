import React, { Component } from 'react';
import CreatePosterForm from './components/CreatePosterForm';
import Poster from './components/Poster';

class App extends Component {
  state = {
    title: '',
    subtitle: '',
    image: ''
  };

  getPosterTitle = e => {
    this.setState({
      title: e.target.value
    });
  };

  getPosterSubtitle = e => {
    this.setState({
      subtitle: e.target.value
    });
  };

  getImageURL = e => {
    this.setState({
      image: e.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <CreatePosterForm
          getPosterTitle={this.getPosterTitle}
          getPosterSubtitle={this.getPosterSubtitle}
          getImageURL={this.getImageURL}
        />
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
