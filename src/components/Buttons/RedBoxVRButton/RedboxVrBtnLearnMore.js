import React from 'react';

const RedboxVrBtnLearnMore = () => {
  return (
    <div>
      <button
        type='button'
        onClick={(e) => {
          e.preventDefault();
          window.location.href = 'https://redboxvr.co.uk/';
        }}
      >
        {' '}
        Learn More
      </button>
    </div>
  );
};

export default RedboxVrBtnLearnMore;
