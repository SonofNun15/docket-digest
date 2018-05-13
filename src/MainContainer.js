import React from 'react';
import { Subscription } from './subscription/Subscription';
import logo from './logo.svg';

const MainContainer = () => {
  return (
    <div>
      <div className="container">
        <header>
          <img src={logo} width="320" alt="Docket Digest" />
        </header>
        <div>
          <Subscription/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
