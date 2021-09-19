import React from 'react';

export const Dashboard = () => {
  return (
    <div className="container-fluid pt-3">
      <div className="row">

        <div className="col-6">
          <div className="card">
            <div className="card-header">
              Latest movies ({(new Date()).getFullYear()})
            </div>
            <div className="card-body">
              Test
            </div>
          </div>
        </div>

        <div className="col-6">
          <div className="card">
            <div className="card-header">
              Latest movies
            </div>
            <div className="card-body">
              Test
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
