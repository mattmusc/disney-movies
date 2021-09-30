import {faAngleRight, faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {format, parse} from 'date-fns';
import {useGetMovieQuery} from 'features/movie-detail/api';
import React from 'react';
import {Link, useParams} from 'react-router-dom';

const getYear = (x: string | null): string | null =>
  x && format(parse(x, 'yyyy-mm-dd', new Date()), 'yyyy');

export const MovieDetail = () => {
  const {id} = useParams<{ id: string | undefined }>();
  const {data} = useGetMovieQuery(id);

  return (
    <div className="container-fluid pt-4 pb-4">
      <div className="row">

        <div className="col-12 d-flex align-items-baseline">
          <Link to="/">
            <FontAwesomeIcon
              className="text-secondary"
              icon={faArrowAltCircleLeft}
              size="2x"
              style={{marginRight: '0.5em'}}
            />
          </Link>
          <h1>
            {data && data.title}
            <span className="ms-4 badge bg-secondary">
              {data && getYear(data.releaseDate)}
            </span>
          </h1>
        </div>

        <hr/>

        <div className="col-4 mt-4">
          <div className="card mh-100 shadow-sm rounded">
            <div className="card-header">
              <h5>General Infomation</h5>
            </div>
            <div className="card-body">
              {!data && 'Loading...'}
            </div>
          </div>
        </div>

        <div className="col-4 mt-4">
          <div className="card mh-100 shadow-sm rounded">
            <div className="card-header">
              <h5>Starring</h5>
            </div>
            <div className="card-body">
              {!data && 'Loading...'}
              {data && data.starring?.map(actor => (
                <div key={actor}>
                  <div className="text-black-50">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2 text-black"/>
                    {actor}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
