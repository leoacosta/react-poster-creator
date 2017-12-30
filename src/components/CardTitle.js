import React from 'react';

const CardTitle = (props) => {
    return (
        <header>
            <h3 className="card-category">{props.cardCat}</h3>
            <h2 className="card-title">{props.cardTitle}</h2>
        </header>
    )
}

export default CardTitle;