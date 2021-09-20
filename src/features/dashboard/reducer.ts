import {createAction, createReducer} from '@reduxjs/toolkit';
import {Dictionary} from 'core/types';
import {Movie} from 'features/types';

interface DashboardState {
  moviesById: Dictionary<Movie>
}

const initialState: DashboardState = {
  moviesById: {},
}

export const loadData = createAction('dashboard/load-data',
  ({moviesById = {}}: { moviesById: Dictionary<Movie> }) => ({
    payload: {
      moviesById,
    },
  })
);

export const dashboardReducer = createReducer(initialState, builder => {
  builder
    .addCase(loadData, ((state, action) => {
      state.moviesById = action.payload.moviesById;
    }))
})
