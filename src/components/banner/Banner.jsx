// Import des librairies React
import React from 'react';
// Import du fichier de style SCSS
import './banner.scss';

// Définition du composant sous forme de fonction avec les props
export default function Banner({ title, imageSrcUrl, styles = ''}) {
    // Eléments retourner par le composant
    return (
            <div className={`banner ${styles}`}>
                <h1 className='banner__title'>{title}</h1>
                <div className='banner__image'>
                    <img src={imageSrcUrl} alt="bannière" />
                </div>
            </div>
    );
};
