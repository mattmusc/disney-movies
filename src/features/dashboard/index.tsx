import {BoxOfficeBudgetStats} from 'features/dashboard/components/BoxOfficeBudgetStats';
import {LatestMovies} from 'features/dashboard/components/LatestMovies';
import {MoviesByBoxOffice} from 'features/dashboard/components/MoviesByBoxOffice';
import {TopMovies} from 'features/dashboard/components/TopMovies';
import {UnreleasedMovies} from 'features/dashboard/components/UnreleasedMovies';
import React from 'react';

export const Dashboard = () => {
  return (
    <div className="container-fluid pt-2">
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

        <div className="col-12 mt-2">
          <MoviesByBoxOffice/>
        </div>

        <div className="col-4 mt-2">
          <TopMovies/>
        </div>

      </div>
    </div>
  );
};
