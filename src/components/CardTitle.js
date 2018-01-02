import React from 'react';
import CreateCardForm from './CreateCardForm';

const CardTitle = (props) => {
    return (
        <div>
            <header>
                <h3 className="card-category">{props.cardCat}</h3>
                <h2 className="card-title">{props.cardTitle}</h2>
            </header>
            <CreateCardForm />
        </div>
    )
}

export default CardTitle;