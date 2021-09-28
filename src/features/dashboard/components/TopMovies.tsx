import {Dropdown} from 'core/components/dropdown';
import {formatAsCurrency} from 'core/utils';
import {format} from 'date-fns';
import {useGetMoviesQuery} from 'features/dashboard/api';
import {Movie} from 'features/types';
import React from 'react';

const nLatestOptions = [3, 5, 10]

export const TopMovies = () => {
  const [nLatest, setNLatest] = React.useState(5);
  const {data = [], isLoading} = useGetMoviesQuery();
  const currentYear = format(new Date(), 'yyyy');

  const topMovies = data
    .filter((m: Movie) => m.boxOffice)
    .sort((m1: Movie, m2: Movie) => (m2.boxOffice || 0) - (m1.boxOffice || 0))
    .filter((m: Movie, idx: number) => idx <= nLatest)

  return (
    <div className="card h-100">

      <div className="card-header">
        <div className="d-flex justify-content-between">
          <h5>Top {nLatest} Movies ({currentYear})</h5>
          <Dropdown options={nLatestOptions} value={nLatest} setValue={setNLatest}/>
        </div>
      </div>

      <div className="card-body">
        {isLoading && 'Loading'}
        {topMovies.map((m: Movie) => (
          <div key={m.id}>
            <div className="row pt-1 pb-1">
              <div className="col-9 text-black-50">
                {m.title}
              </div>
              <div className="col-3" style={{textAlign: 'right'}}>
                {formatAsCurrency(m.boxOffice)}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
