import {faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useGetMovieQuery} from 'features/movie-detail/api';
import React from 'react';
import {Link, useParams} from 'react-router-dom';

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
          <h1>{data && data.title}</h1>
        </div>

        <hr/>

      </div>
    </div>
  );
};
