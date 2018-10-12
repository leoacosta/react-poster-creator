import React from 'react';

const Poster = (props) => {
    return (
        <div>
            <header>
                <h3 className="card-category">{props.cardCat}</h3>
                <h2 className="card-title">{props.posterTitle}</h2>
            </header>
        </div>
    )
}

export default Poster;