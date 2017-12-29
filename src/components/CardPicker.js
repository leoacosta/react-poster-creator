import React, { Component } from 'react';

class CardPicker extends Component {
    render() {
        return (
            <form className="card-picker">
                <h2>Please enter your card title</h2>
                <input type="text" placeholder="Card Name" required />
                <button type="submit">View Card</button>
            </form>
        )
    }
}

export default CardPicker;