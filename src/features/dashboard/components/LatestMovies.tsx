import {MovieWithDate} from 'core/components';
import {Dropdown} from 'core/components/dropdown';
import {format, startOfYear} from 'date-fns';
import {Movie} from 'features/types';
import React from 'react';
import {useGetLatestMoviesQuery} from '../api';

const nLatestOptions = [3, 5, 10]

export const LatestMovies = () => {
  const [nLatest, setNLatest] = React.useState(5);
  const {data = [], isLoading} = useGetLatestMoviesQuery({
    n: nLatest,
    releaseDate: format(startOfYear(new Date()), 'yyyy-MM-dd')
  });
  const currentYear = format(new Date(), 'yyyy');

  return (
    <div className="card h-100 shadow rounded">

      <div className="card-header">
        <div className="d-flex justify-content-between">
          <h5>Latest {nLatest} Movies ({currentYear})</h5>
          <Dropdown options={nLatestOptions} value={nLatest} setValue={setNLatest}/>
        </div>
      </div>

      <div className="card-body">
        {isLoading && 'Loading'}
        {data.map((m: Movie) => (
          <div key={m.id}>
            <MovieWithDate
              title={m.title}
              date={m.releaseDate}
              link={`/m/${m.id}`}
            />
          </div>
        ))}
      </div>

    </div>
  );
};
