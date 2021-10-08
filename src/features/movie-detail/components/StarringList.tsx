import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {EmptyDiv, LoadingComponent} from 'core/components';
import {Movie} from 'features/types';
import React from 'react';


interface StarringListProps {
  movieData: Movie | null | undefined;
}


export const StarringList = ({movieData}: StarringListProps) => {
  const colSize = 5;
  const starring = movieData?.starring || [];

  return (
    <div className="card mh-100 shadow rounded">
      <div className="card-header">
        <h5>Starring ({movieData && movieData.starring?.length})</h5>
      </div>
      <div className="card-body">
        <LoadingComponent isLoading={!movieData}/>
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
            <EmptyDiv cols={5} data={starring}/>
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
