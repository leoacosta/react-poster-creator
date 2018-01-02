import React, { Component } from 'react';

class CreateCardForm extends Component {
    createCard(event) {
        event.preventDefault();
        console.log("Create card trigger!");

        // Create card object
        const card = {
            title: this.title.value,
            category: this.category.value,
            image: this.image.value, 
        }

        console.log(card);

    }

    render() {
        return (
            <form className="card-picker" onSubmit={(e) => this.createCard(e)}>
                <input ref={(input) => this.title = input} type="text" name="" id="" placeholder="Title"/>
                <input ref={(input) => this.category = input} type="text" name="" id="" placeholder="Category"/>
                <input ref={(input) => this.image = input} type="text" name="" id="" placeholder="Image URL"/>
                <button>Create Card &rarr;</button>
            </form>
        )
    }
}

export default CreateCardForm;