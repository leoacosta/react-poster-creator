import React from 'react';

const NotFound = ({ location }) => {
    return (
        <div>
            <h3>No match for <code>{location.pathname}</code></h3>
        </div>
    )
}

export default NotFound;
