
import React from 'react';

import ReactDOM from 'react-dom/client';
/* necessité d'importer le module de react pour faire les routes */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

/* import des 3 pages du projet */
import Home from './pages/Home/Home'
import Error404 from './pages/Error404/Error404'
import FicheLogement from './pages/FicheLogement/FicheLogement'
import Apropos from './pages/Apropos/Apropos';



/* creation des routes vers les differentes pages ici */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FicheLogement/:id" element={<FicheLogement/>} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
