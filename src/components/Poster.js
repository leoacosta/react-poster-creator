import React, { Component } from 'react';

class Poster extends Component {
    render() {
        const styles = {
            backgroundImage: `url(${this.props.image})`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`
        };
        return (
            <div className="column" style={styles}>
                <header>
                    <h3 className="poster-subtitle">{this.props.subtitle}</h3>
                    <h2 className="poster-title">{this.props.title}</h2>
                </header>
            </div>
        );
    }
}

export default Poster;
