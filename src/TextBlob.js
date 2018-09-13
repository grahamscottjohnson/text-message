import React from 'react';

export default ({ text }) => {
  return <div className={text.direction}>{text.text}</div>;
};
