import React from 'react';

const ContactButton = () => {
  return (
    <div>
      <button
        type='button'
        onClick={(e) => {
          e.preventDefault();
          window.location.href = '/Contact';
        }}
      >
        {' '}
        Contact
      </button>
    </div>
  );
};

export default ContactButton;
