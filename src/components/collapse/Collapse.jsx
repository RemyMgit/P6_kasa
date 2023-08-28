// Import des librairies React
import React, { useState } from "react";
// Import du fichier de style SCSS
import './collapse.scss';

// Définition du composant sous forme de fonction avec les props
export default function Collapse({ title, children, styles = '' }) {
  // Utilisation du Hook d'état useState pour suivre l'état du collapse
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Fonction pour gerer l'ouverture et la fermeture du collapse
  function openCollapse () {
    setIsCollapsed(!isCollapsed)
  };
  
  // Eléments retourner par le composant
  return (
    <div className={`${styles}`}>
      <button className="collapse__header">
        <h3 className="collapse__title">{title}</h3>
        <span className={isCollapsed ? "arrow-up" : "arrow-down"} onClick={openCollapse} ></span>
      </button>

      <div className={isCollapsed ? "collapse__body active" : "collapse__body"}>
        <div className="collapse__content">        
          {children}
        </div>
      </div>
    </div>
  );
}
