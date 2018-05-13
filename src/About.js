import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <header>
                <Link to="/">
                    <img src="" alt="Docket Digest" />
                </Link>
            </header>
            <p>This is the About Page.</p>
        </div>
    )
}

export default About;