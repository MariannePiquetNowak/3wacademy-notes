import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = (props) => {
    return (
        <Link to="/">
            <img style={{ width: "100%", height:"100vh"}} src="https://c.tenor.com/IHdlTRsmcS4AAAAC/404.gif" />
        </Link>
    );
}

export default NotFound;
