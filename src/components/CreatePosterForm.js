import React, { Component } from 'react';

class CreatePosterForm extends Component {
    render() {
        return (
            <form className="card-picker">
                <input type="text" placeholder="Title"/>
                <input type="text" placeholder="Category"/>
                <input type="text" placeholder="Image URL"/>
                <button>Print Poster &rarr;</button>
            </form>
        )
    }
}

export default CreatePosterForm;