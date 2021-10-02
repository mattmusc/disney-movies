import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Movie} from 'features/types';
import React from 'react';


interface StarringListProps {
  movieData: Movie | null | undefined;
}


export const StarringList = ({movieData}: StarringListProps) => {
  const colSize = 5;
  const starring = movieData?.starring || [];
  const emptyDivs = [...Array(colSize - starring.slice(0, colSize).length)];

  return (
    <div className="card mh-100 shadow rounded">
      <div className="card-header">
        <h5>Starring ({movieData && movieData.starring?.length})</h5>
      </div>
      <div className="card-body">
        {!movieData && 'Loading...'}
        <div className="d-flex">
          <div>
            {starring.slice(0, colSize).map(actor => (
              <div key={actor}>
                <div className="text-black-50 pb-1">
                  <FontAwesomeIcon icon={faAngleRight} className="me-2 text-black"/>
                  {actor}
                </div>
              </div>
            ))}
            {/* adds an empty div to match 5 div height */}
            {emptyDivs.map(() => <div className="text-black-50 pb-1">&nbsp;</div>)}
          </div>
          <div className="ms-5">
            {starring.slice(colSize).map(actor => (
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
