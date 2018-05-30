import React from 'react';
import { Link } from 'react-router-dom';
import './AboutHelp.css';
import logo from '../assets/logo.svg';

import questions from './questions';

 function renderQuestion(question) {
  return (
    <div>
      <h3>{question.question}</h3>
      <p className="text">{question.answer}</p>
    </div>
  );
}

const Help = () => {
  return (
    <div className="image-center">
      <header>
        <Link to="/">
          <img src={logo} width="320" alt="Docket Digest" />
        </Link>
      </header>
      <div className="text-container wide">
        {questions.map(renderQuestion)}
      </div>
    </div>
  )
}

export default Help;
