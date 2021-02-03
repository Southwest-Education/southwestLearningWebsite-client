import React from 'react';

const ReadingPlusBtnLogin = () => {
  return (
    <div>
      <button
        type='button'
        onClick={(e) => {
          e.preventDefault();
          window.location.href = 'https://login.readingplus.com/';
        }}
      >
        {' '}
        Login
      </button>
    </div>
  );
};

export default ReadingPlusBtnLogin;
