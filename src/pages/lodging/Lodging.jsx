// Import des librairies React
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// Import du fichier de style SCSS
import './lodging.scss';
// Import des composants
import Carrousel from '../../components/carrousel/Carrousel';
import Tag from '../../components/tag/Tag';
import Star from '../../components/star/Star';
import Collapse from '../../components/collapse/Collapse';
import Error404 from '../error404/Error404';

// Définition du composant sous forme de fonction
export default function Lodging () {
  
  // Utilisation du hook useParams pour récupérer l'ID du logement
  const { id } = useParams()
  // Utilisation du Hook d'état useState pour stocker les informations du logement
  const [lodging, setLodging] = useState(null);
// Utilisation du Hook d'état useState pour stocker le chargement de la page
  const [isLoading, setIsLoading] = useState(true);
  // Utilisation du Hook d'état useState pour stocker les erreurs
  const [isError, setIsError] = useState(false);
 
  // Utilisation du Hook useEffect pour charger les informations du logement
  useEffect(() => {
    fetch('/data_lodging/lodging.json')
      .then((response) => response.json())
      .then((data) => {
        // Recherche du logement correspondant à l'ID récupéré dans la base de données
        const selectedLodging = data.find((lodging) => lodging.id === id);
          // Si id non trouvé alors renvoie sur la page d'erreur sinon renvoie sur la page du logement
          if (!selectedLodging) {
            setIsError(true);
          } else {
              setLodging(selectedLodging);
            }
        // On change l'état du chargement en mettant false
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setIsError(true);
        setIsLoading(false);
      });
  }, [ id ]);

// Si la page est entrain de se charger alors on indique que son chargement est en cours
  if (isLoading) {
    return <p>Chargement en cours</p>;
  }

  // Si une error est trouvé alors on se redirige vers la page 404 
  if (isError) {
    return <Error404 />;
  }
    // Eléments retourner par le composant
    return (
        <div className='lodging'>
          {/* Appel du composant Carrousel */}
          <Carrousel images={lodging.pictures} />

          <div className='lodging__infos'>
            <div className="lodging__presentation">
              <div className="lodging__infos--title">
                  {/* Récupération des données sur le logement (titre + location) */}
                  <h2 className='lodging__title'>{lodging.title}</h2>
                  <p className='lodging__location'>{lodging.location}</p>
              </div>
              <div className="tags">
                {/* Parcours de la liste des logements et appel du composant Tag */}
                {lodging.tags.map((tag, id) => (
                  <Tag content={tag} key={id} />
                ))}
              </div>
            </div>

            <div className='lodging__infos--owner'>
                <div className="owner">
                    <div className="owner__name">
                      {/* Récupération des données sur le propriétaire du logement (nom et notation) */}
                      {lodging.host.name.split(' ').map((nameSplit, id) => (
                        <p className='name' key={id}>{nameSplit}</p>
                      ))}
                    </div>
                    <div className="owner__image">
                        <img src={lodging.host.picture} alt="propriétaire du logement" />
                    </div>
                </div>
                <div className="stars">
                  {/* Parcours de la liste des logements et appel du composant Star */}
                  {[...Array(5)].map((star, id) => {
                    return <Star key={id} active={id < lodging.rating} />
                  })}
                </div>
            </div>
          </div>
          <div className="collapses collapses__lodging">
            {/* Appel du composant Collapse */}
              <Collapse styles="collapse__lodging" title="Description">
                  <p>{lodging.description}</p>
              </Collapse>
              <Collapse styles="collapse__lodging" title="Équipements" >
                <ul className='collapse__list'>
                  {lodging.equipments.map((equipment, id) => (
                  <li className='collapse__list--item' key={id}>{equipment}</li>
                  ))} 
                </ul>         
              </Collapse>
          </div>
        </div>
    );
};
