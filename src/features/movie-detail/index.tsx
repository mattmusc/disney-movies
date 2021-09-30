import {faAngleRight, faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {formatAsCurrency} from 'core/utils';
import {format, parse} from 'date-fns';
import {useGetMovieQuery} from 'features/movie-detail/api';
import {Movie} from 'features/types';
import React from 'react';
import {Link, useParams} from 'react-router-dom';


const getYear = (x: string | null): string | null =>
  x && format(parse(x, 'yyyy-mm-dd', new Date()), 'yyyy');

const formatDate = (x: string | null): string | null =>
  x && format(parse(x, 'yyyy-mm-dd', new Date()), 'dd/mm/yyyy');


type MovieKey = keyof Movie;
type MovieDetailType = {
  key: MovieKey,
  label: string,
};

const details: MovieDetailType[] = [
  {key: 'releaseDate', label: 'Release date'},
  {key: 'boxOffice', label: 'Box office'},
  {key: 'budget', label: 'Budget'},
  {key: 'runningTime', label: 'Running Time'},
];

const formatDetail = (
  d: Date | string | string[] | number | null | undefined,
  k: MovieKey
): string | null => {
  if (k === 'releaseDate') {
    return formatDate(d as string);
  }
  if (['boxOffice', 'budget'].includes(k)) {
    if (!d || d === '0' || d === 0) {
      return '-';
    }
    return formatAsCurrency(d as number);
  }
  return d == null ? '-' : `${d}`;
};


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
              {data && details.map(d => (
                <div key={d.key}>
                  <div className="row pb-1">
                    <div className="col-9 text-black-50">
                      <FontAwesomeIcon icon={faAngleRight} className="me-2 text-black"/>
                      {d.label}:
                    </div>
                    <div className="col-3" style={{textAlign: 'right'}}>
                      {formatDetail(data[d.key], d.key)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-4 mt-4">
          <div className="card mh-100 shadow-sm rounded">
            <div className="card-header">
              <h5>Starring ({data && data.starring?.length})</h5>
            </div>
            <div className="card-body">
              {!data && 'Loading...'}
              <div className="d-flex">
                <div>
                  {data && data.starring?.slice(0, 5).map(actor => (
                    <div key={actor}>
                      <div className="text-black-50 pb-1">
                        <FontAwesomeIcon icon={faAngleRight} className="me-2 text-black"/>
                        {actor}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="ms-5">
                  {data && data.starring?.slice(5).map(actor => (
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
        </div>

      </div>
    </div>
  );
};
