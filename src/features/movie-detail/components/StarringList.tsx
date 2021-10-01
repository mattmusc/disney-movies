import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Movie} from 'features/types';
import React from 'react';


interface StarringListProps {
  movieData: Movie | null | undefined;
}


export const StarringList = ({movieData}: StarringListProps) => {
  return (
    <div className="card mh-100 shadow-sm rounded">
      <div className="card-header">
        <h5>Starring ({movieData && movieData.starring?.length})</h5>
      </div>
      <div className="card-body">
        {!movieData && 'Loading...'}
        <div className="d-flex">
          <div>
            {movieData && movieData.starring?.slice(0, 5).map(actor => (
              <div key={actor}>
                <div className="text-black-50 pb-1">
                  <FontAwesomeIcon icon={faAngleRight} className="me-2 text-black"/>
                  {actor}
                </div>
              </div>
            ))}
          </div>
          <div className="ms-5">
            {movieData && movieData.starring?.slice(5).map(actor => (
              <div key={actor}>
                <div className="text-black-50 pb-1">
                  <FontAwesomeIcon icon={faAngleRight} className="me-2 text-black"/>
                  {actor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
