import React from 'react';
import {Route, Routes as Routing} from 'react-router-dom';
import Home from './pages/Home/Home'

const Routes = () => (
    <Routing>
        <Route exact path='/' element={<Home />} />
    </Routing>
);

export default Routes;
