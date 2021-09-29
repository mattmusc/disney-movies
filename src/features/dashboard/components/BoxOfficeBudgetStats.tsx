import {useGetMoviesQuery} from 'features/dashboard/api';
import {Movie} from 'features/types';
import React from 'react';

interface MovieStatProps {
  title: string;
  value: number;
  percentage: (x: number) => string;
}

function MovieStat({title, value, percentage}: MovieStatProps) {
  return (
    <div className="row pt-1 pb-1">
      <div className="col-8 text-black-50">
        {title}
      </div>
      <div className="col-2" style={{textAlign: 'right', paddingRight: 0, width: '21%'}}>
        {value}
      </div>
      <div className="col-2" style={{textAlign: 'right', paddingLeft: 0, width: '12%'}}>
        {percentage(value)}%
      </div>
    </div>
  );
}

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

  const percentage = (x: number): string => data.length > 0
    ? (x / data.length * 100).toPrecision(2)
    : `${0}`;

  return (
    <div className="card h-100">

      <div className="card-header">
        <h5>Box Office & Budget Stats</h5>
      </div>

      <div className="card-body">

        <MovieStat
          title="Total movies"
          value={data.length}
          percentage={() => '100'}
        />

        <MovieStat
          title="Movies with Box Office and Budget"
          value={nOfMoviesWithBoxOfficeAndBudget}
          percentage={percentage}
        />

        <MovieStat
          title="Movies with Box Office"
          value={nOfMoviesWithBoxOffice}
          percentage={percentage}
        />

        <MovieStat
          title="Movies with Budget"
          value={nOfMoviesWithBudget}
          percentage={percentage}
        />

        <MovieStat
          title="Movies without Box Office"
          value={nOfMoviesWithoutBoxOffice}
          percentage={percentage}
        />

        <MovieStat
          title="Movies without Budget"
          value={nOfMoviesWithoutBudget}
          percentage={percentage}
        />

      </div>

    </div>
  );
}
