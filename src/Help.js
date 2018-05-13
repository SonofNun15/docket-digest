import React from 'react';
import { Link } from 'react-router-dom';
import './AboutHelp.css';
import logo from './logo.svg';

const Help = () => {
    return (
        <div className="image-center">
            <header>
                <Link to="/">
                    <img src={logo} width="320" alt="Docket Digest" />
                </Link>
            </header>
            <p className="text">This is the Help Page.</p>
        </div>
    )
}

export default Help;