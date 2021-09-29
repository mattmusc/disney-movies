import {configureStore} from '@reduxjs/toolkit';
import {dashboardApi} from 'features/dashboard/api';
import {movieDetailApi} from 'features/movie-detail/api';

export const store = configureStore({
  reducer: {
    [dashboardApi.reducerPath]: dashboardApi.reducer,
    [movieDetailApi.reducerPath]: movieDetailApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(dashboardApi.middleware)
      .concat(movieDetailApi.middleware),
});
