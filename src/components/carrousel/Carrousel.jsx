// Import des librairies React
import React, { useState } from "react";
// Import du fichier de style SCSS
import './carrousel.scss';

// Définition du composant sous forme de fonction avec les props
export default function Carrousel ({ images }) {
    // Utilisation du Hook d'état useState pour suivre l'index de l'image actuellement affichée
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    //Fonction pour afficher l'image précédente
    function displayPreviousImage() {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    //Fonction pour afficher l'image suivante

    function displayNextImage() {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    };
    
    // Eléments retourner par le composant
    return (
            <div className="carrousel">
                {/* Affichage des flèches de navigation et du compteur d'image uniquement si le nombre d'images est supérieur à 1 */}
                {images.length > 1 && (
                    <>
                        <button className="arrow-left" onClick={displayPreviousImage}>
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 80" fill="none">
                            <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
                            </svg>
                        </button>

                        <button className="arrow-right" onClick={displayNextImage}>
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 80" fill="none">
                            <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
                            </svg>
                        </button>
                    
                        <div className="carrousel__counter">{currentImageIndex + 1}/{images.length}</div>
                    </>
                )}

                {/* Affichage des images avec ybe transition pour l'animation */}
                <div className="carrousel__images-container"
                    style={{transform: `translateX(-${currentImageIndex * 100}%)`}}>
                        {images.map((index) => (
                            <div key={index} className="carrousel__image">
                                <img src={images[currentImageIndex]} alt="logement" />
                            </div>
                        ))}
                </div>
            </div>
    );
};
