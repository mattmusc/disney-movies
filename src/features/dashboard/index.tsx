import {ActorsByAppearance} from 'features/dashboard/components/ActorsByAppearance';
import {MoviesByBoxOfficeAndYear} from 'features/dashboard/components/MoviesByBoxOfficeAndYear';
import {MovieStats} from 'features/dashboard/components/MovieStats';
import {CompaniesByProductions} from 'features/dashboard/components/CompaniesProductions';
import {LatestMovies} from 'features/dashboard/components/LatestMovies';
import {MoviesByBoxOffice} from 'features/dashboard/components/MoviesByBoxOffice';
import {TopMovies} from 'features/dashboard/components/TopMovies';
import {UnreleasedMovies} from 'features/dashboard/components/UnreleasedMovies';
import React from 'react';

export const Dashboard = () => {
  return (
    <div className="container-fluid pt-4 pb-4">
      <div className="row">

        <div className="col-4">
          <LatestMovies/>
        </div>

        <div className="col-4">
          <UnreleasedMovies/>
        </div>

        <div className="col-4">
          <MovieStats/>
        </div>

        <div className="col-12 mt-4">
          <MoviesByBoxOffice/>
        </div>

        <div className="col-4 mt-4">
          <TopMovies/>
        </div>

        <div className="col-4 mt-4">
          <ActorsByAppearance/>
        </div>

        <div className="col-4 mt-4">
          <CompaniesByProductions/>
        </div>

        <div className="col-12 mt-4">
          <MoviesByBoxOfficeAndYear />
        </div>

      </div>
    </div>
  );
};
