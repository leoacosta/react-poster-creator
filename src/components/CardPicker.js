import React, { Component } from 'react';

class CardPicker extends Component {
    goToCardDashboard(event) {
        event.preventDefault();
        const cardId = this.cardInput.value.toLowerCase();
        // Goes to the corresponding route from user input
        this.props.history.push(`/card/${cardId}/`);

        // TODO: Investigate how to add hyphens when spaces exist in URL
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