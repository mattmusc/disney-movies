import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {format, isDate, parse} from 'date-fns';
import React from 'react';
import { Link } from 'react-router-dom';

interface MovieWithDateProps {
  title: string;
  date: string | Date;
  link?: string;
}

const formatDate = (d: Date) => format(d, 'dd/MM/yyyy');

export function MovieWithDate({title, date, link}: MovieWithDateProps) {
  return (
    <div className="row pt-1 pb-1">
      <div className="col-9 text-black-50">
        <FontAwesomeIcon icon={faAngleRight} className="me-2 text-black"/>
        {link && <Link to={link}>{title}</Link>}
        {!link && title}
      </div>
      <div className="col-3" style={{textAlign: 'right'}}>
        {/* @ts-ignore */}
        {isDate(date) ? formatDate(date) : formatDate(parse(date, 'yyyy-MM-dd', new Date()))}
      </div>
    </div>
  );
}
