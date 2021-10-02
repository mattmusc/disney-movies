import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Dropdown} from 'core/components/dropdown';
import {formatAsCurrency} from 'core/utils';
import {format} from 'date-fns';
import {useGetMoviesQuery} from 'features/dashboard/api';
import {Movie} from 'features/types';
import React from 'react';

const nLatestOptions = [3, 5, 10]

export const TopMovies = () => {
  const [nLatest, setNLatest] = React.useState(5);
  const [sortKey, setSortKey] = React.useState<'boxOffice' | 'budget'>('boxOffice');

  const {data = [], isLoading} = useGetMoviesQuery();
  const currentYear = format(new Date(), 'yyyy');

  const topMovies = data
    .filter((m: Movie) => m.boxOffice)
    .sort((m1: Movie, m2: Movie) => (m2[sortKey] || 0) - (m1[sortKey] || 0))
    .filter((m: Movie, idx: number) => idx <= nLatest)

  return (
    <div className="card h-100 shadow rounded">

      <div className="card-header">
        <div className="d-flex justify-content-between">
          <h5>Top {nLatest} Movies ({currentYear})</h5>

          <div className="d-flex">
            <span>Sort by:</span>
            <div className="btn-group btn-group-sm mx-4">
              <button
                className={'btn btn-outline-secondary'.concat(sortKey === 'boxOffice' ? ' active' : '')}
                onClick={() => setSortKey('boxOffice')}
              >Box Office
              </button>
              <button
                className={'btn btn-outline-secondary'.concat(sortKey === 'budget' ? ' active' : '')}
                onClick={() => setSortKey('budget')}
              >Budget
              </button>
            </div>
            <Dropdown options={nLatestOptions} value={nLatest} setValue={setNLatest}/>
          </div>
        </div>
      </div>

      <div className="card-body">
        {isLoading && 'Loading'}
        {topMovies.map((m: Movie) => (
          <div key={m.id}>
            <div className="row pt-1 pb-1">
              <div className="col-9 text-black-50">
                <FontAwesomeIcon icon={faAngleRight} className="me-2 text-black"/>
                {m.title}
              </div>
              <div className="col-3" style={{textAlign: 'right'}}>
                {formatAsCurrency(m.boxOffice)}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
