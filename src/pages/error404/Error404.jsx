// Import des librairies React
import React from 'react';
import { Link } from 'react-router-dom';
// Import du fichier de style SCSS
import './error404.scss';
// Import de l'image error
import error from "./404.svg";

// Définition du composant sous forme de fonction
export default function Error404 () {
    // Eléments retourner par le composant
    return (
        <div className='error404'>
            <div className="error404__logo">
                <img src={error} alt="logo 404" />
            </div>
            <p className='error404__text'>Oups! La page que vous demandez n'existe pas.</p>
            <Link className="backToHome" to="/">Retourner sur la page d'accueil</Link>
        </div>
    );
};
