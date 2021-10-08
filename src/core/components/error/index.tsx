import React from 'react';

export const ErrorComponent = ({isError = false}: { isError: boolean }) => {
  return (
    <>
      {isError && (<div className="d-flex justify-content-center">
        Failed to load data
      </div>)}
    </>
  );
};
