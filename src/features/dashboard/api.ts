import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {format} from 'date-fns';
import {Movie} from 'features/types';

interface LatestMoviesConfig {
  n: number | undefined;
  releaseDate: string | undefined;
}

export const dashboardApi = createApi({
  reducerPath: 'dashboardApi',

  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),

  endpoints: (builder) => ({

    getMovies: builder.query<Movie[], void>({
      query: () => `/movies`
    }),

    getLatestMovies: builder.query<Movie[], LatestMoviesConfig>({
      query: ({n, releaseDate}) =>
        `/movies?releaseDate_gte=${releaseDate}&releaseDate_lte=${format(new Date(), 'yyyy-MM-dd')}&_limit=${n}`
    }),

    getUnreleasedMovies: builder.query<Movie[], void>({
      query: () => `/movies?releaseDate_gte=${format(new Date(), 'yyyy-MM-dd')}`
    })
  }),
})

export const {useGetLatestMoviesQuery, useGetUnreleasedMoviesQuery, useGetMoviesQuery} = dashboardApi
