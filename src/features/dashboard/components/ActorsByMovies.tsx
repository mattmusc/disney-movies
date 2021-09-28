import {Dropdown} from 'core/components/dropdown';
import {StringDictionary} from 'core/types';
import {format} from 'date-fns';
import {useGetMoviesQuery} from 'features/dashboard/api';
import {Movie} from 'features/types';
import React from 'react';

const nLatestOptions = [3, 5, 10]

export const ActorsByMovies = () => {
  const [nLatest, setNLatest] = React.useState(5);

  const {data = [], isLoading} = useGetMoviesQuery();
  const currentYear = format(new Date(), 'yyyy');

  const actorsByMovies = data
    .filter((m: Movie) => m.starring)
    .reduce((d: StringDictionary<number>, m: Movie) => {
      let starring: string[] = [];

      if (m.starring && Array.isArray(m.starring)) {
        starring = m.starring;
      }

      if (m.starring && typeof m.starring === 'string') {
        starring = [m.starring];
      }

      for (let star of (starring)) {
        if (d[star]) {
          d[star] = d[star] + 1;
        } else {
          d[star] = 1;
        }
      }

      return d;
    }, {});

  const actors = Object.entries(actorsByMovies)
    .map(([actor, freq]) => ({actor, appearances: freq}))
    .sort((a, b) => b.appearances - a.appearances)
    .filter((_, idx) => idx <= nLatest);

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
          <div key={x.actor}>
            <div className="row pt-1 pb-1">
              <div className="col-9 text-black-50">
                {x.actor}
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
