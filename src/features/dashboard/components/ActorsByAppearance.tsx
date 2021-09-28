import {Dropdown} from 'core/components/dropdown';
import {useFrequency} from 'core/hooks';
import {format} from 'date-fns';
import {useGetMoviesQuery} from 'features/dashboard/api';
import React from 'react';

const nLatestOptions = [3, 5, 10]

export const ActorsByAppearance = () => {
  const [nLatest, setNLatest] = React.useState(5);

  const {data = [], isLoading} = useGetMoviesQuery();
  const currentYear = format(new Date(), 'yyyy');

  const {hist: actors} = useFrequency({data, k: 'starring', limit: nLatest});

  return (
    <div className="card h-100">

      <div className="card-header">
        <div className="d-flex justify-content-between">
          <h5>Top {nLatest} Actors by appearance ({currentYear})</h5>
          <Dropdown options={nLatestOptions} value={nLatest} setValue={setNLatest}/>
        </div>
      </div>

      <div className="card-body">
        {isLoading && 'Loading'}
        {actors.map(x => (
          <div key={x.name}>
            <div className="row pt-1 pb-1">
              <div className="col-9 text-black-50">
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
