// Import des librairies React
import React, { useState, useEffect } from 'react';
// Import du fichier de style SCSS
import './home.scss';
// Import de l'image banner
import banner_home from '../../components/banner/banner_home.png';
// Import des composants
import Banner from '../../components/banner/Banner';
import Card from '../../components/card/Card';

// Définition du composant sous forme de fonction
export default function Home () {
    // Utilisation du Hook d'état useState pour stocker les données des logements
    const [lodgingData, setLodgingData] = useState([]);

    // Utilisation du Hook useEffect pour charger les informations du logement
    useEffect(() => {
        fetch('/data_lodging/lodging.json')
            .then(response => response.json())
            .then(data => setLodgingData(data))
            .catch(error => console.error(error))
    }, []); 

    // Eléments retourner par le composant
    return (
        <div className='home'>
            {/* Appel du composant Banner */}
            <Banner title={<span>Chez vous, <br className="banner__br"/>partout et ailleurs</span>} imageSrcUrl={banner_home} />

            <div className="gallery">
                {/* Parours de la liste des logements et appel du composant Card */}
                {lodgingData.map(lodging => (
                    <Card key={lodging.id} id={lodging.id} cover={lodging.cover} title={lodging.title}  />
                ))}
            </div>

        </div>
    );
};
