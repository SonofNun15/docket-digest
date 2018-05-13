import React from 'react';
import { Subscription } from './subscription/Subscription';

const MainContainer = () => {
  return (
    <div>
      <div className="container">
        <header>
          <img src="" alt="Docket Digest" />
        </header>
        <div>
          <Subscription/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
