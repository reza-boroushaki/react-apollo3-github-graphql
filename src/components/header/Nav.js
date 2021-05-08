import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

export default function Nav(){
    return(
        <nav>
            <Link to={{pathname: "https://github.com/reactjs/reactjs.org/issues/"}} target="_blank" className="fab fa-github" id="logo"></Link>
        </nav>
    )
}