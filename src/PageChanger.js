import React from 'react';

export default ({ page, numberOfPages, incrementPage, decrementPage }) => {
  return (
    <div className="pageChanger">
      {page !== 1 && (
        <button className="prev pageButton" onClick={decrementPage}>
          {'<'}
        </button>
      )}
      {page !== numberOfPages && (
        <button className="next pageButton" onClick={incrementPage}>
          {'>'}
        </button>
      )}
    </div>
  );
};
