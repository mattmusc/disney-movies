import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {LoadingComponent} from 'core/components';
import {formatAsCurrency} from 'core/utils';
import {format, parse} from 'date-fns';
import {Movie} from 'features/types';
import React from 'react';


interface GeneralInformationProps {
  movieData: Movie | null | undefined;
}

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
  {key: 'language', label: 'Language'},
];


const formatDate = (x: string | null): string | null =>
  x && format(parse(x, 'yyyy-mm-dd', new Date()), 'dd/mm/yyyy');


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


export const GeneralInformation = ({movieData}: GeneralInformationProps) => {
  return (
    <div className="card mh-100 shadow rounded">
      <div className="card-header">
        <h5>General Infomation</h5>
      </div>
      <div className="card-body">
        <LoadingComponent isLoading={!movieData}/>
        {movieData && details.map(d => (
          <div key={d.key}>
            <div className="row pb-1">
              <div className="col-9 text-black-50">
                <FontAwesomeIcon icon={faAngleRight} className="me-2 text-black"/>
                {d.label}:
              </div>
              <div className="col-3" style={{textAlign: 'right'}}>
                {formatDetail(movieData[d.key], d.key)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
