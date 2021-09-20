import {configureStore} from '@reduxjs/toolkit';
import {dashboardApi} from 'features/dashboard/api';
import {dashboardReducer} from 'features/reducers';

export const store = configureStore({
  reducer: {
    [dashboardApi.reducerPath]: dashboardApi.reducer,
    dashboard: dashboardReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dashboardApi.middleware),
});
