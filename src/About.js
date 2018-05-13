import React from 'react';
import { Link } from 'react-router-dom';
import './AboutHelp.css';
import logo from './logo.svg';

const About = () => {
    return (
        <div className="image-center">
          <header>
            <Link to="/">
              <img src={logo} width="320" alt="Docket Digest" />
            </Link>
          </header>
          <div className="text-container narrow">
            <p className="text">
              Docket Digest was developed to provide instant open access to public legal material.
            </p>
            <p className="text">
              Docket Digest allows users to subscribe to updates of federal cases in courts that
              provide public case feeds.  Users no longer need to pay to access PACER to
              confirm whether updates have been filed.
            </p>
            <p className="text">
              Users will receive 3 free subscriptions, and are charged a small fee for subsequent
              subscriptions.
            </p>
          </div>
        </div>
    )
}

export default About;
