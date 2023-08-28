// Import des librairies React
import React from 'react';
import { Link } from 'react-router-dom';
// Import du fichier ROUTES pour les liens
import ROUTES from '../../router/Routes';
// Import du fichier de style SCSS
import './card.scss';

// Définition du composant sous forme de fonction avec les props
export default function Card ({ id, title, cover }) {
    // Eléments retourner par le composant
    return (
        <Link to={ROUTES.lodging(id)} key={id} className="card__link">
                <h2 className='card__title'>{title}</h2>
                <div className='card__image'>
                    <img src={cover} alt={title} />
                </div>
        </Link>
    );
};
