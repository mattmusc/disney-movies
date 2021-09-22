import {ReactECharts} from 'core/components/charts/ReactECharts';
import {useGetMoviesQuery} from 'features/dashboard/api';
import {Movie} from 'features/types';
import React from 'react';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  notation: 'compact',
  maximumFractionDigits: 2,
  minimumFractionDigits: 0,
});
const formatAsCurrency = (n: number = 0) => currencyFormatter.format(n);

export const MoviesByBoxOffice = () => {
  const {data = [], isLoading} = useGetMoviesQuery();

  const [sortKey, setSortKey] = React.useState<'boxOffice' | 'budget'>('boxOffice');
  const [boxOfficeFilter, setBoxOfficeFilter] = React.useState<'all' | 'with' | 'without'>('all');
  const [budgetFilter, setBudgetFilter] = React.useState<'all' | 'with' | 'without'>('all');

  const filterBoxOffice = (m: Movie) => {
    if (boxOfficeFilter === 'all' || boxOfficeFilter === 'with') {
      return true;
    }
    if (boxOfficeFilter === 'without') {
      return (m.boxOffice || 0) > 0;
    }
  };

  const filterBudget = (m: Movie) => {
    if (budgetFilter === 'all' || budgetFilter === 'with') {
      return true;
    }
    if (budgetFilter === 'without') {
      return (m.budget || 0) > 0;
    }
  };

  const sortByKeyAsc = (m1: Movie, m2: Movie) => {
    if (m1[sortKey] != null && m2[sortKey] != null) {
      // @ts-ignore
      return m1[sortKey] - m2[sortKey];
    }
    if (m1[sortKey] == null) {
      return -1;
    }
    return 1;
  };

  return (
    <div className="card h-100">

      <div className="card-header">
        <div className="d-flex justify-content-between align-baseline">
          <h5>Movies by Box Office & Budget</h5>
          <div>
            <span className="mx-2">Box Office:</span>
            <div className="btn-group btn-group-sm">
              <button
                className={'btn btn-outline-secondary'.concat(boxOfficeFilter === 'all' ? ' active' : '')}
                onClick={() => setBoxOfficeFilter('all')}
              >Both
              </button>
              <button
                className={'btn btn-outline-secondary'.concat(boxOfficeFilter === 'with' ? ' active' : '')}
                onClick={() => setBoxOfficeFilter('with')}
              >With Box Office
              </button>
              <button
                className={'btn btn-outline-secondary'.concat(boxOfficeFilter === 'without' ? ' active' : '')}
                onClick={() => setBoxOfficeFilter('without')}
              >Without Box Office
              </button>
            </div>

            <span className="mx-2">Budget:</span>
            <div className="btn-group btn-group-sm">
              <button
                className={'btn btn-outline-secondary'.concat(budgetFilter === 'all' ? ' active' : '')}
                onClick={() => setBudgetFilter('all')}
              >Both
              </button>
              <button
                className={'btn btn-outline-secondary'.concat(budgetFilter === 'with' ? ' active' : '')}
                onClick={() => setBudgetFilter('with')}
              >With budget
              </button>
              <button
                className={'btn btn-outline-secondary'.concat(budgetFilter === 'without' ? ' active' : '')}
                onClick={() => setBudgetFilter('without')}
              >Without budget
              </button>
            </div>

            <span className="mx-2">Sort by:</span>
            <div className="btn-group btn-group-sm">
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

          </div>
        </div>
      </div>

      <div
        className="card-body"
        style={{overflowY: 'scroll'}}
      >
        <ReactECharts
          loading={isLoading}
          style={{
            height: '540px',
          }}
          option={{
            dataset: {
              source: [
                ['title', 'boxOffice', 'budget'],
                ...data
                  .map((m: Movie) => m)
                  .filter((m: Movie) => m.budget && m.boxOffice)
                  .filter((m: Movie) => m.id > 50 && m.id < 250)
                  .filter((m: Movie) => filterBoxOffice(m) && filterBudget(m))
                  .sort(sortByKeyAsc)
                  .map((m: Movie) => {
                    if (m.id === 192) {
                      console.log(m.title, m.boxOffice, m.budget);
                    }
                    return [m.title, m.boxOffice || 0, m.budget || 0]
                  })
              ],
            },
            tooltip: {},
            grid: {
              left: '24%',
              right: '5%',
              top: '1%',
              bottom: '5%',
            },
            xAxis: {
              type: 'value',
              axisLabel: {
                formatter: (value: number) => {
                  return formatAsCurrency(value);
                },
              },
            },
            yAxis: {
              type: 'category',
            },
            series: [
              {
                type: 'bar',
                label: {
                  position: 'right',
                  show: true,
                  formatter: (params) => {
                    const d = params.data as ['', 0];
                    const value = d[1];
                    if (value < 20000000) {
                      return '';
                    }
                    return formatAsCurrency(value);
                  },
                },
              },
              {
                type: 'bar',
                label: {
                  position: 'right',
                  show: true,
                  formatter: (params) => {
                    const d = params.data as ['', 0, 0];
                    const value = d[2];
                    return formatAsCurrency(value);
                  },
                },
              },
            ],
          }}
        />
      </div>

    </div>
  );
};
