// Import des librairies React
import React from 'react';
// Import du fichier de style SCSS
import './tag.scss';

// Définition du composant sous forme de fonction avec les props
export default function Tag ({ id, content }) {
      // Eléments retourner par le composant
    return (
        <p key={id} className='tag'>{ content }</p>
    );
};