import {ReactECharts} from 'core/components/charts/ReactECharts';
import {useGetMoviesQuery} from 'features/dashboard/api';
import {createTree} from 'features/dashboard/utility';
import {Movie} from 'features/types';
import React from 'react';

/**
 * This widget creates a chart to compare box office and budget.
 * It uses a TreeMap.
 * @constructor
 */
export const MoviesByBoxOffice = () => {
    const {data = []} = useGetMoviesQuery();

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

    const sortByKeyDesc = (m1: Movie, m2: Movie) => {
      if (m1[sortKey] != null && m2[sortKey] != null) {
        // @ts-ignore
        return m2[sortKey] - m1[sortKey];
      }
      if (m1[sortKey] == null) {
        return 1;
      }
      return -1;
    };

    const treeData = data
      .filter((m: Movie) => filterBoxOffice(m) && filterBudget(m))
      .sort(sortByKeyDesc)
      .reduce(createTree, []);

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
            option={{
              tooltip: {},
              series: [
                {
                  type: 'treemap',
                  data: treeData,
                  label: {
                    show: true,
                    formatter: '{b}'
                  },
                  upperLabel: {
                    show: true,
                    height: 30,
                    color: '#fff',
                  },
                  itemStyle: {
                    borderColor: '#fff'
                  },
                  levels: [
                    {
                      itemStyle: {
                        borderColor: '#777',
                        borderWidth: 0,
                        gapWidth: 1
                      },
                      upperLabel: {
                        show: false
                      },
                    },
                    {
                      itemStyle: {
                        borderColor: '#555',
                        borderWidth: 5,
                        gapWidth: 1
                      },
                      emphasis: {
                        itemStyle: {
                          borderColor: '#ddd'
                        }
                      }
                    },
                    {
                      colorSaturation: [0.35, 0.5],
                      itemStyle: {
                        borderWidth: 5,
                        gapWidth: 1,
                        borderColorSaturation: 0.6
                      }
                    }
                  ],
                },
              ]
            }}
          />
        </div>

      </div>
    );
  }
;
