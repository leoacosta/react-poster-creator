import React, { Component } from 'react';

class CreatePosterForm extends Component {
  render() {
    return (
      <div className="column">
        <form className="poster-details">
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={this.props.handleValueChange}
          />
          <input
            type="text"
            name="subtitle"
            placeholder="Subtitle"
            onChange={this.props.handleValueChange}
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            onChange={this.props.handleValueChange}
          />
        </form>
      </div>
    );
  }
}

export default CreatePosterForm;
