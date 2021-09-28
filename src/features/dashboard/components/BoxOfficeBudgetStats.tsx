import {useGetMoviesQuery} from 'features/dashboard/api';
import {Movie} from 'features/types';
import React from 'react';

export function BoxOfficeBudgetStats() {
  const {data = []} = useGetMoviesQuery();

  // TODO: I guess here I might use React.memo
  const nOfMoviesWithBoxOfficeAndBudget = data
    .filter((m: Movie) => m.boxOffice && m.budget).length;
  const nOfMoviesWithBudget = data
    .filter((m: Movie) => m.budget).length;
  const nOfMoviesWithBoxOffice = data
    .filter((m: Movie) => m.boxOffice).length;

  const nOfMoviesWithoutBoxOffice = Math.abs(data.length - nOfMoviesWithBoxOffice);
  const nOfMoviesWithoutBudget = Math.abs(data.length - nOfMoviesWithBudget);

  return (
    <div className="card h-100">

      <div className="card-header">
        <h5>Box Office & Budget Stats</h5>
      </div>

      <div className="card-body">

        <div className="d-flex justify-content-between">
          <p className="text-black-50">Movies with Box Office and Budget</p>
          <p>{nOfMoviesWithBoxOfficeAndBudget}</p>
        </div>

        <div className="d-flex justify-content-between">
          <p className="text-black-50">Movies with Box Office</p>
          <p>{nOfMoviesWithBoxOffice}</p>
        </div>

        <div className="d-flex justify-content-between">
          <p className="text-black-50">Movies with Budget</p>
          <p>{nOfMoviesWithBudget}</p>
        </div>

        <div className="d-flex justify-content-between">
          <p className="text-black-50">Movies without Box Office</p>
          <p>{nOfMoviesWithoutBoxOffice}</p>
        </div>

        <div className="d-flex justify-content-between">
          <p className="text-black-50">Movies without Budget</p>
          <p>{nOfMoviesWithoutBudget}</p>
        </div>

      </div>

    </div>
  );
}
