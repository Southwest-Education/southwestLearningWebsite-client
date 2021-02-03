import React from 'react';

const SymphonyMathBtnRoute = () => {
  return (
    <div>
      <button
        type='button'
        onClick={(e) => {
          e.preventDefault();
          window.location.href = '/SymphonyMath';
        }}
      >
        {' '}
        Learn More
      </button>
    </div>
  );
};

export default SymphonyMathBtnRoute;
