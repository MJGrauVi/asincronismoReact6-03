import React from 'react'
import { useState } from "react";
import FilmList from "./componentes/ListaPeliculas.jsx";
import PeliculaDetalle from "./componentes/PeliculaDetalle.jsx";
import Contenedor from "./componentes/Contenedor.jsx";

export default function App() {
  //useState para guardar que pelicula ha seleccionado el usuario, inicia sin selección (null) y la función para actualizarlo.
  const [selectedFilm, setSelectedFilm] = useState(null);

  return (
    <Contenedor >
      <h1>Enciclopedia de Star Wars versión en React</h1>
      <div className="componentes">
        {/*Cuando el usuario haga clic en una pelicula se llama a onSelectedFilm y cambiar el estado aplicando el setter. */}
        {/* El componente padre la pasa la función al hijo para que le devuelva los datos. en ente caso por props */}
      <FilmList onSelectFilm={setSelectedFilm} />
      <PeliculaDetalle film={selectedFilm} />
      </div>
    </Contenedor>
  );
}
