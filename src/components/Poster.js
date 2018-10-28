import React, { Component } from 'react';

class Poster extends Component {
  render() {
    const styles = {
      backgroundImage: `url(${this.props.image})`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`
    };
    const hasTitle = this.props.title;
    const hasSubTitle = this.props.subtitle;

    return (
      <div className="column poster-container" style={styles}>
        <header>
          {/* <small className="poster-byline">A posterly original poster</small> */}
          {hasTitle ? <h2 className="poster-title">{this.props.title}</h2> : ''}
          {hasSubTitle ? (
            <h3 className="poster-subtitle">{this.props.subtitle}</h3>
          ) : (
            ''
          )}
        </header>
        <svg
          className="print-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M399.95 160h-287.9C76.824 160 48 188.803 48 224v138.667h79.899V448H384.1v-85.333H464V224c0-35.197-28.825-64-64.05-64zM352 416H160V288h192v128zm32.101-352H127.899v80H384.1V64z" />
        </svg>
      </div>
    );
  }
}

export default Poster;
