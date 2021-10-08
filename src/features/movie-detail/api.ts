import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {SERVER_URL} from 'core/config';
import {Movie} from 'features/types';

export const movieDetailApi = createApi({
  reducerPath: 'movieDetailApi',

  baseQuery: fetchBaseQuery({baseUrl: SERVER_URL}),

  endpoints: (builder) => ({

    getMovie: builder.query<Movie | null, string | undefined>({
      query: id => `/movies?id=${id}`,

      transformResponse(movies: Movie[] = []): Movie | null {
        return movies.length > 0 ? movies[0] : null;
      },

    }),

  }),

});

export const {
  useGetMovieQuery,
} = movieDetailApi;
