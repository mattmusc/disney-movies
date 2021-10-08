import {ErrorComponent, LoadingComponent, MovieWithDate} from 'core/components';
import {useGetUnreleasedMoviesQuery} from 'features/dashboard/api';
import {Movie} from 'features/types';
import React from 'react';

export const UnreleasedMovies = () => {
  const {data: unreleasedMovies = [], isLoading, isError} = useGetUnreleasedMoviesQuery();

  return (
    <div className="card h-100 shadow rounded">
      <div className="card-header">
        <h5>Unrealeased Movies</h5>
      </div>
      <div className="card-body">
        <LoadingComponent isLoading={isLoading}/>
        <ErrorComponent isError={isError}/>

        {unreleasedMovies.map((m: Movie) => (
          <div key={m.id}>
            <MovieWithDate title={m.title} date={m.releaseDate} link={`/m/${m.id}`}/>
          </div>
        ))}
      </div>
    </div>
  );
};
