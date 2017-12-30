import React, { Component } from 'react';

class CardPicker extends Component {
    render() {
        return (
            <form className="card-picker">
                <h2 className="card-picker__title">Please enter your card title</h2>
                <label className="card-picker__label" htmlFor="card-title">Create and customize your very own card component.</label>
                <input type="text" id="card-title" placeholder="Card Title" required />
                <button type="submit">View Card</button>
            </form>
        )
    }
}

export default CardPicker;