import {ReactECharts} from 'core/components/charts/ReactECharts';
import {formatAsCurrency} from 'core/utils';
import {format, parse} from 'date-fns';
import {useGetMoviesQuery} from 'features/dashboard/api';
import React from 'react';

export const MoviesByBoxOfficeAndYear = () => {
  const {data = [], isLoading} = useGetMoviesQuery();

  const movies = data
    .map(m => [
      parse(m.releaseDate, 'yyyy-mm-dd', new Date()) || 0,
      m.boxOffice || 0,
      m.title,
    ])
    .filter(([a, b]) => a && b);

  return (
    <div className="card h-100 shadow rounded">

      <div className="card-header">
        <h5>Movies by Release Date and Box Office</h5>
      </div>

      <div className="card-body">
        {isLoading && 'Loading...'}
        {!isLoading && (
          <ReactECharts option={{
            xAxis: {
              type: 'time',
              name: 'Release Date',
            },
            yAxis: {
              name: 'Box Office',
              axisLabel: {
                formatter: (value: number) => `${formatAsCurrency(value)}`,
              },
            },
            dataZoom: {},
            tooltip: {
              formatter: params => {
                if (Array.isArray(params)) {
                  return '';
                }

                // @ts-ignore
                const [releaseDate, boxOffice, title] = params.data;
                return `${title}: ${formatAsCurrency(boxOffice)} - ${format(releaseDate, 'dd/mm/yyyy')}`;
              },
            },
            dataset: {
              source: movies,
            },
            series: [
              {
                type: 'scatter',
              }
            ],
          }}/>
        )}
      </div>

    </div>
  );
};
