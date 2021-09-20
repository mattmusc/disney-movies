import {useGetMoviesQuery} from 'features/dashboard/api';
import React from 'react';

export const MoviesByBoxOffice = () => {
  const {data, isSuccess} = useGetMoviesQuery();

  React.useEffect(() => {
    if (isSuccess) {
      console.log(data);
    }
  }, [data, isSuccess]);

  return (
    <div className="card h-100">

      <div className="card-header">
        <div>Movies by Box Office</div>
      </div>

      <div className="card-body">

      </div>

    </div>
  );
};
