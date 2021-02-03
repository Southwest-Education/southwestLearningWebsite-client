import React from 'react';

const RedBoxVRBtnRoute = () => {
  return (
    <div>
      <button
        type='button'
        onClick={(e) => {
          e.preventDefault();
          window.location.href = '/RedboxVR';
        }}
      >
        {' '}
        Learn More
      </button>
    </div>
  );
};

export default RedBoxVRBtnRoute;
