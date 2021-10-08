import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {ErrorComponent, LoadingComponent} from 'core/components';
import {useFrequency} from 'core/hooks';
import {format} from 'date-fns';
import {useGetMoviesQuery} from 'features/dashboard/api';
import React from 'react';

export const CompaniesByProductions = () => {
  const {data = [], isLoading, isError} = useGetMoviesQuery();
  const currentYear = format(new Date(), 'yyyy');

  const {hist: companies} = useFrequency({data, k: 'productionCompany', limit: null});

  return (
    <div className="card h-100 shadow rounded">

      <div className="card-header">
        <div className="d-flex justify-content-between">
          <h5>Top Production Companies ({currentYear})</h5>
        </div>
      </div>

      <div className="card-body">
        <LoadingComponent isLoading={isLoading}/>
        <ErrorComponent isError={isError}/>

        {companies.map(x => (
          <div key={x.name}>
            <div className="row pt-1 pb-1">
              <div className="col-9 text-black-50">
                <FontAwesomeIcon icon={faAngleRight} className="me-2 text-black"/>
                {x.name}
              </div>
              <div className="col-3" style={{textAlign: 'right'}}>
                {x.appearances}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
