import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CategoryContainer from './components/CategoryContainer/CategoryContainer';
import AboutUs from './components/AboutUs/AboutUs';
import NotFound from './components/NotFound/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda online!" />} />
          <Route path="/category/:categoryId" element={<CategoryContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} /> {/* esta sin asignar la ruta de contacto*/}
        </Routes>
      </div>
    </Router>
  );
}

export default App;