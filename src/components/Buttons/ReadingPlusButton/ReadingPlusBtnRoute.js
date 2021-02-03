import React from 'react';

const ReadingPlusBtnRoute = () => {
  return (
    <div>
      <button
        type='button'
        onClick={(e) => {
          e.preventDefault();
          window.location.href = '/ReadingPlus';
        }}
      >
        {' '}
        Learn More
      </button>
    </div>
  );
};

export default ReadingPlusBtnRoute;
