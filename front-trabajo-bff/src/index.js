import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import PaginaPrincipal from './pages/PaginaPrincipal';
import PokemonSpecies from './pages/PokemonSpecies';
import Moves from './pages/Moves';
import Berries from './pages/Berries';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/pokemon-species",
    element: <PokemonSpecies/>,
  },
  {
    path: "/moves",
    element: <Moves/>,
  },
  {
    path: "/berries",
    element: <Berries/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
