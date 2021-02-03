import React from 'react';

const SymphonyMathBtnLogin = () => {
  return (
    <div>
      <button
        type='button'
        onClick={(e) => {
          e.preventDefault();
          window.location.href =
            'https://content.symphonylearning.com/assets/student/index.html?v=latest';
        }}
      >
        {' '}
        Login
      </button>
    </div>
  );
};

export default SymphonyMathBtnLogin;
