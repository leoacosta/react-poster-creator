import React from 'react';
import CreateCardForm from './CreateCardForm';

const PosterTitle = (props) => {
    return (
        <div>
            <header>
                <h3 className="card-category">{props.cardCat}</h3>
                <h2 className="card-title">{props.PosterTitle}</h2>
            </header>
            <CreateCardForm />
        </div>
    )
}

export default PosterTitle;