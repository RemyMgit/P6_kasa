// Import des librairies React
import React from 'react';
import {Routes, Route } from 'react-router-dom';
// Import des composants
import Home from '../pages/home/Home';
import Lodging from '../pages/lodging/Lodging';
import About from '../pages/about/About';
import Error404 from '../pages/error404/Error404';
import ROUTES from './Routes';

// Définition du composant sous forme de fonction
export default function Router () {
    // Eléments retourner par le composant
    return (
        <Routes>
            <Route path={ROUTES.home} element={<Home />} />
            <Route path={ROUTES.lodging()} element={<Lodging />} />
            <Route path={ROUTES.about} element={<About />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
};
