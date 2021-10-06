import {ReactECharts} from 'core/components/charts/ReactECharts';
import {formatAsCurrency} from 'core/utils';
import {format, parse} from 'date-fns';
import {TopLevelFormatterParams} from 'echarts/types/dist/shared';
import {useGetMoviesQuery} from 'features/dashboard/api';
import React from 'react';


const xAxisFormatter = (value: number) => `${formatAsCurrency(value)}`;

const tooltipFormatter = (params: TopLevelFormatterParams) => {
  if (Array.isArray(params)) {
    return '';
  }
  // @ts-ignore
  const [releaseDate, boxOffice, title] = params.data;
  return `${title} - ${formatAsCurrency(boxOffice)} - ${format(releaseDate, 'dd/MM/y')}`;
};


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
          <ReactECharts style={{height: '350px'}} option={{
            grid: {},
            xAxis: {
              type: 'time',
              name: 'Release Date',
              splitLine: {
                lineStyle: {
                  type: 'dashed'
                },
              },
            },
            yAxis: {
              name: 'Box Office',
              axisLabel: {
                formatter: xAxisFormatter,
              },
              splitLine: {
                lineStyle: {
                  type: 'dashed',
                },
              },
            },
            dataZoom: {},
            tooltip: {
              trigger: 'item',
              axisPointer: {
                type: 'cross',
              },
              formatter: tooltipFormatter,
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
