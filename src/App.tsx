import {Dashboard, MovieDetail} from 'features';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
    return (
        <div className="container-fluid">
            <Router>
                <Routes>
                    <Route path="/m/:id" element={<MovieDetail/>} />
                    <Route path="/" element={<Dashboard/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
