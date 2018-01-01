import React, { Component } from 'react';

class CardPicker extends Component {
    goToCardDashboard(event) {
        event.preventDefault();
        const cardId = this.cardInput.value.toLowerCase();
        console.log(`/card/${cardId}/`);
        // investigate how route can go to `/card/${cardId}`
        //this.context.router.transitionTo(`/card/${cardId}`);
    }

    render() {
        return (
            <form className="card-picker" onSubmit={(e) => this.goToCardDashboard(e)}>
                <h2 className="card-picker__title">Please enter your card title</h2>
                <label className="card-picker__label" htmlFor="card-title">Create and customize your very own card component.</label>
                <input type="text" id="card-title" placeholder="Card Title" ref={(input) => { this.cardInput = input; }} required />
                <button type="submit">Continue &rarr;</button>
            </form>
        )
    }
}

export default CardPicker;