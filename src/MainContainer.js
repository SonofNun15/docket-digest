import React from 'react';
import Subscription from './subscription/Subscription';
import { Link } from 'react-router-dom';
import Test from './subscription/Test';
import logo from './logo.svg';

const MainContainer = () => {
  return (
    <div>
      <div className="container">
        <header>
          <Link to="/">
            <img src={logo} width="320" alt="Docket Digest" />
          </Link>
        </header>
        <div>
          <Test/>
          {/* <Subscription/> */}
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
