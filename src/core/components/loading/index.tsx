import {Spinner} from 'core/components/spinner';
import React from 'react';

export const LoadingComponent = ({isLoading = false}: { isLoading: boolean }) => {
  return (
    <>
      {isLoading && <div className="d-flex justify-content-center">
        <Spinner/>
        <Spinner/>
        <Spinner/>
      </div>}
    </>
  );
};
