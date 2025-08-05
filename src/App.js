import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import BrandStrip from './components/BrandStrip/BrandStrip';
import AboutUs from './components/AboutUs/AboutUs';
import ContactForm from './components/ContactForm/ContactForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <ItemListContainer greeting="¡Bienvenidos a Licicor - Tu mundo de artículos de librería!" />
        <BrandStrip />
        <AboutUs />
        <ContactForm />
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Licicor - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;