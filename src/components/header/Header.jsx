// Import des librairies React
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// Import du fichier ROUTES pour les liens
import ROUTES from '../../router/Routes';
// Import du fichier de style SCSS
import './header.scss';
// Import du logo
import logo from "./LOGO.svg";

// Définition du composant sous forme de fonction
export default function Header() {
    // Eléments retourner par le composant
    return (
        <header className="header">
            <Link to={ROUTES.home} className="header__logo">
                <img src={logo} alt="logo kasa" />
            </Link>

            <nav className="header__navigation">
                <ul className="navigation__list">
                    <li className='navigation__list--item'>
                        <NavLink to={ROUTES.home} className="navigation__item--link">
                            Accueil
                        </NavLink>
                    </li>
                    <li className='navigation__list--item'>
                        <NavLink to={ROUTES.about} className="navigation__item--link">
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
};
