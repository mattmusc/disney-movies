import React from 'react';
import {useParams} from 'react-router-dom';

export const Dashboard = () => {
  const {sport} = useParams<{ sport: string }>();

  return (
    <div className="container-fluid">
      <div className="row">
        Dashboard works! Viewing {sport}
      </div>
    </div>
  );
};
