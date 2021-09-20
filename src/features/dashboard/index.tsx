import {LatestMovies} from 'features/dashboard/components/LatestMovies';
import {MoviesByBoxOffice} from 'features/dashboard/components/MoviesByBoxOffice';
import {UnreleasedMovies} from 'features/dashboard/components/UnreleasedMovies';
import React from 'react';

export const Dashboard = () => {
  return (
    <div className="container-fluid pt-3">
      <div className="row">

        <div className="col-6">
          <LatestMovies/>
        </div>

        <div className="col-6">
          <UnreleasedMovies/>
        </div>

        <div className="col-12 mt-3">
          <MoviesByBoxOffice/>
        </div>

      </div>
    </div>
  );
};
