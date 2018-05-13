import React from 'react';
import './Account.css';

function gravatarUrl(gravatarId) {
  return `https://www.gravatar.com/avatar/${gravatarId}?s=96`
}
const Account = ({ user }) => {
  if (user == null) {
    return <div />
  }

  const { gravatarId } = user;

  return (
    <div className="account-area">
      <img src={gravatarUrl(gravatarId)} width="48" height="48" className="profile" alt="profile" />
    </div>
  );
};

export default Account;
