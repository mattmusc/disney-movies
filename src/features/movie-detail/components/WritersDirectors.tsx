import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {EmptyDiv} from 'core/components';
import {Movie} from 'features/types';
import React from 'react';


interface WritersDirectorsProps {
  movieData: Movie | null | undefined;
}


function toArray(ss: string[] | string | null | undefined): string[] {
  if (ss == null) {
    return [];
  }

  if (typeof ss === 'string') {
    return [ss];
  }

  return ss;
}


export const WritersDirectors = ({movieData}: WritersDirectorsProps) => {
  const directors = toArray(movieData?.directedBy);
  const writers = toArray(movieData?.writtenBy);

  return (
    <div className="card mh-100 shadow rounded">
      <div className="card-header">
        <h5>Directors and Writers</h5>
      </div>
      <div className="card-body">
        {!movieData && 'Loading...'}
        {movieData && (
          <div className="row">
            <div className="col-6">
              <h6>Director(s)</h6>
              {directors.map(director => (
                <div className="pb-1">
                  <FontAwesomeIcon icon={faAngleRight} className="me-2 text-black"/>
                  {director}
                </div>
              ))}
              <EmptyDiv cols={4} data={directors}/>
            </div>
            <div className="col-6">
              <h6>Writers(s)</h6>
              {writers.map(writer => (
                <div className="pb-1">
                  <FontAwesomeIcon icon={faAngleRight} className="me-2 text-black"/>
                  {writer}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
