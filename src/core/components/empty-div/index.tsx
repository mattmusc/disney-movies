import React from 'react';

interface EmptyDivProps {
  cols: number;
  data: any[];
  classes?: string;
}

export const EmptyDiv = ({cols = 5, data = [], classes = ''}: EmptyDivProps) => {
  const emptyDivs = [...Array(cols - data.slice(0, cols).length)];
  return (
    <>
      {/* adds an empty div to match # cols div height */}
      {emptyDivs.map(() => <div className={"text-black-50 pb-1".concat(` ${classes}`)}>&nbsp;</div>)}
    </>
  );
};
