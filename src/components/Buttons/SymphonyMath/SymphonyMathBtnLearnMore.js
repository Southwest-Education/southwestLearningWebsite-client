import React from 'react';

const SymphonyMathBtnLearnMore = () => {
  return (
    <div>
      <button
        type='button'
        onClick={(e) => {
          e.preventDefault();
          window.location.href = 'https://symphonylearning.com/';
        }}
      >
        {' '}
        Learn More
      </button>
    </div>
  );
};

export default SymphonyMathBtnLearnMore;
