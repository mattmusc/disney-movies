import {faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react';
import {useParams} from 'react-router-dom';

export const MovieDetail = () => {
  const {id} = useParams<{ id: string | undefined }>();

  return (
    <div className="container-fluid pt-4 pb-4">
      <div className="row">

        <div className="col-12 d-flex align-items-baseline">
          <FontAwesomeIcon
            className="text-primary"
            icon={faArrowAltCircleLeft}
            size="2x"
            style={{marginRight: '0.5em'}}
          />
          <h1>Movie detail: {id}</h1>
        </div>

      </div>
    </div>
  );
};
