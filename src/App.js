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

    render() {
        return (
            <div className="container">
                <CreatePosterForm
                    title={this.state.title}
                    getPosterTitle={this.getPosterTitle}
                    getPosterSubtitle={this.getPosterSubtitle}
                />
                <Poster
                    title={this.state.title}
                    subtitle={this.state.subtitle}
                />
            </div>
        );
    }
}

export default App;
