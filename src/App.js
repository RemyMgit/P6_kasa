// Import des librairies React
import React from "react";
// Import du fichier de style SCSS
import './app.scss';
// Import des composants
import Router from "./router/Router";
import Layout from "./components/layout/Layout";
import Footer from "./components/footer/Footer";

// Définition du composant sous forme de fonction
export default function App() {
  // Eléments retourner par le composant
  return (
    <div className="App">
      <Layout>
        <Router />
      </Layout>

        <Footer />
    </div>
  );
}


