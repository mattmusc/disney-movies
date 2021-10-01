import {faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {format, parse} from 'date-fns';
import {Movie} from 'features/types';
import React from 'react';
import {Link} from 'react-router-dom';


interface HeaderProps {
  movieData: Movie | null | undefined;
}


const getYear = (x: string | null): string | null =>
  x && format(parse(x, 'yyyy-mm-dd', new Date()), 'yyyy');


export const Header = ({movieData}: HeaderProps) => {
  return (
    <>
      <Link to="/">
        <FontAwesomeIcon
          className="text-secondary"
          icon={faArrowAltCircleLeft}
          size="2x"
          style={{marginRight: '0.5em'}}
        />
      </Link>
      <h1>
        {movieData && movieData.title}
        <span className="ms-4 badge bg-secondary">
          {movieData && getYear(movieData.releaseDate)}
        </span>
      </h1>
    </>
  );
};
