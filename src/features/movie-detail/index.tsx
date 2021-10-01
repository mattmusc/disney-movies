import {useGetMovieQuery} from 'features/movie-detail/api';
import {GeneralInformation} from 'features/movie-detail/components/GeneralInformation';
import {Header} from 'features/movie-detail/components/Header';
import {StarringList} from 'features/movie-detail/components/StarringList';
import React from 'react';
import {useParams} from 'react-router-dom';


export const MovieDetail = () => {
  const {id} = useParams<{ id: string | undefined }>();
  const {data} = useGetMovieQuery(id);

  return (
    <div className="container-fluid pt-4 pb-4">
      <div className="row">

        <div className="col-12 d-flex align-items-baseline">
          <Header movieData={data}/>
        </div>

        <hr/>

        <div className="col-4 mt-4">
          <GeneralInformation movieData={data}/>
        </div>

        <div className="col-4 mt-4">
          <StarringList movieData={data}/>
        </div>

      </div>
    </div>
  );
};
