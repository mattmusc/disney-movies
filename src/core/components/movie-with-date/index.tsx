import {format, isDate, parse} from 'date-fns';
import React from 'react';

interface MovieWithDateProps {
  title: string;
  date: string | Date;
}

const formatDate = (d: Date) => format(d, 'dd/MM/yyyy');

export function MovieWithDate({title, date}: MovieWithDateProps) {
  return (
    <div className="row pt-1 pb-1">
      <div className="col-9 text-black-50">
        {title}
      </div>
      <div className="col-3" style={{textAlign: 'right'}}>
        {/* @ts-ignore */}
        {isDate(date) ? formatDate(date) : formatDate(parse(date, 'yyyy-MM-dd', new Date()))}
      </div>
    </div>
  );
}
