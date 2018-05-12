import React from 'react';
import { Subscription } from './subscription/Subscription';

const MainContainer = () => {
  return (
    <div className="container">
      <header>
        <img src="" alt="Docket Digest" />
      </header>
      <div>
        <Subscription/>
      </div>
    </div>
  );
}

export default MainContainer;
