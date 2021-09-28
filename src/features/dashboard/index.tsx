import {BoxOfficeBudgetStats} from 'features/dashboard/components/BoxOfficeBudgetStats';
import {LatestMovies} from 'features/dashboard/components/LatestMovies';
import {MoviesByBoxOffice} from 'features/dashboard/components/MoviesByBoxOffice';
import {UnreleasedMovies} from 'features/dashboard/components/UnreleasedMovies';
import React from 'react';

export const Dashboard = () => {
  return (
    <div className="container-fluid pt-4">
      <div className="row">

        <div className="col-4">
          <LatestMovies/>
        </div>

        <div className="col-4">
          <UnreleasedMovies/>
        </div>

        <div className="col-4">
          <BoxOfficeBudgetStats/>
        </div>

        <div className="col-12 mt-4">
          <MoviesByBoxOffice/>
        </div>

      </div>
    </div>
  );
};
