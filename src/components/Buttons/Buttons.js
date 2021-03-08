import React from 'react';

export const RedirectButton = ({ url, title }) => {
  return (
    <div>
      <button
        type='button'
        onClick={(e) => {
          e.preventDefault();
          window.location.href = url;
        }}
      >
        {title}
      </button>
    </div>
  );
};
