import React from 'react';

const ReadingPlusBtnLearnMore = () => {
  return (
    <div>
      <button
        type='button'
        onClick={(e) => {
          e.preventDefault();
          window.location.href = 'https://www.readingplus.com/';
        }}
      >
        {' '}
        Learn More
      </button>
    </div>
  );
};

export default ReadingPlusBtnLearnMore;
