import React from 'react';
import './App.css';

export default ({ text }) => {
  return <div className={`textBlob ${text.direction || ''}`}>{text.text}</div>;
};
