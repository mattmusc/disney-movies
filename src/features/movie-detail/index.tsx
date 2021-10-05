import {Spinner} from 'core/components';
import {useGetMovieQuery} from 'features/movie-detail/api';
import {GeneralInformation} from 'features/movie-detail/components/GeneralInformation';
import {Header} from 'features/movie-detail/components/Header';
import {StarringList} from 'features/movie-detail/components/StarringList';
import {WritersDirectors} from 'features/movie-detail/components/WritersDirectors';
import React from 'react';
import {useParams} from 'react-router-dom';


export const MovieDetail = () => {
  const {id} = useParams<{ id: string | undefined }>();
  const {data} = useGetMovieQuery(id);

  const [imageLoading, setImageLoading] = React.useState(true);
  const [imageSource, setImageSource] = React.useState('');

  React.useEffect(() => {
    setTimeout(() => {
      setImageLoading(false);
      setImageSource('https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg')
    }, 1000);
  }, [imageSource]);

  return (
    <div className="container-fluid pt-2 pb-4">
      <div className="row">

        <div className="col-12 d-flex align-items-center justify-content-between">
          <div className="col-10 d-flex align-items-baseline">
            <Header movieData={data}/>
          </div>

          <div className="col-2 d-flex align-items-baseline justify-content-end">
            <span className="me-4">Images by:</span>
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="movie-cover" width="100px"
            />
          </div>
        </div>

        <hr/>

        <div className="col-4 mt-2">
          <GeneralInformation movieData={data}/>
        </div>

        <div className="col-4 mt-2">
          <StarringList movieData={data}/>
        </div>

        <div className="col-4 mt-2 d-flex justify-content-center align-items-center">
          {imageLoading && (
            <>
              <Spinner/>
              <Spinner/>
              <Spinner/>
            </>
          )}
          {!imageLoading && (
            <img
              src={imageSource}
              alt="movie-cover" width="100px"
            />
          )}
        </div>

        <div className="col-4 mt-2">
          <WritersDirectors movieData={data}/>
        </div>

      </div>
    </div>
  );
};
