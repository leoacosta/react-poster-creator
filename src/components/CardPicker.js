import React, { Component } from 'react';

class CardPicker extends Component {
    goToCardDashboard(event) {
        event.preventDefault();
        console.log("Go to the card dashboard...");
        console.log(this.cardInput.value);
    }

    render() {
        return (
            <form className="card-picker" onSubmit={(e) => this.goToCardDashboard(e)}>
                <h2 className="card-picker__title">Please enter your card title</h2>
                <label className="card-picker__label" htmlFor="card-title">Create and customize your very own card component.</label>
                <input type="text" id="card-title" placeholder="Card Title" ref={(input) => { this.cardInput = input; }} required />
                <button type="submit">View Card</button>
            </form>
        )
    }
}

export default CardPicker;