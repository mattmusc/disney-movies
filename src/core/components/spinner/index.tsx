import React from 'react';

function Spinner() {
  return (
    <div
      className="spinner-grow me-2 text-primary"
      role="status"
      style={{
        width: '1rem',
        height: '1rem',
      }}>
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

export {Spinner}
