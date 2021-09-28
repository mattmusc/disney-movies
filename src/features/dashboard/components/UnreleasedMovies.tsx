import {MovieWithDate} from 'core/components';
import {format} from 'date-fns';
import {useGetUnreleasedMoviesQuery} from 'features/dashboard/api';
import {Movie} from 'features/types';
import React from 'react';

export const UnreleasedMovies = () => {
  const {data: unreleasedMovies = [], isLoading: unreleasedLoading} = useGetUnreleasedMoviesQuery();
  const currentYear = format(new Date(), 'yyyy');

  return (
    <div className="card h-100">
      <div className="card-header">
        <h5>Unrealeased Movies ({currentYear})</h5>
      </div>
      <div className="card-body">
        {unreleasedLoading && 'Loading'}
        {unreleasedMovies.map((m: Movie) => (
          <div key={m.id}>
            <MovieWithDate title={m.title} date={m.releaseDate}/>
          </div>
        ))}
      </div>
    </div>
  );
};
