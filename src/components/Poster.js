import React, { Component } from 'react';

class Poster extends Component {
  render() {
    return (
      <div className="column">
        <header>
          <h3 className="poster-subtitle">{this.props.subtitle}</h3>
          <h2 className="poster-title">{this.props.title}</h2>
        </header>
        <img src={this.props.image} alt={this.props.title} />
      </div>
    );
  }
}

export default Poster;
