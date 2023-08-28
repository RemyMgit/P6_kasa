// Import des librairies React
import React from 'react';
// Import du fichier de style SCSS
import './footer.scss';
// Import du logo
import logo from "./LOGO.svg";

// Définition du composant sous forme de fonction
export default function Footer () {
    // Eléments retourner par le composant
    return (
        <footer className='footer'>
            <div className="footer__logo">
                <img src={logo} alt="logo kasa" />
            </div>
            <p className='footer__text'>{<span>© 2020 Kasa. All <br className="footer__br"/>rights reserved</span>}</p> 
        </footer>
    );
};