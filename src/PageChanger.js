import React from 'react';

export default ({ page, numberOfPages, incrementPage, decrementPage }) => {
  return (
    <div className="pageChanger">
      {page !== 1 && (
        <span className="prev" onClick={decrementPage}>
          Prev
        </span>
      )}
      {page !== numberOfPages && (
        <span className="next" onClick={incrementPage}>
          Next
        </span>
      )}
    </div>
  );
};
