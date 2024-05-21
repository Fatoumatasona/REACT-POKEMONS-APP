import React, { FunctionComponent, useState, useEffect } from "react";
import Pokemon from "./models/pokemon";
import POKEMONS from "./models/mock-pokemon";

//const App: FunctionComponent = () => {
//const name: String = "React";
//const [name, setName] = useState<String>("React");
// code détaillé
// var nameStateVariable = useState('React');
//var name = nameStateVariable[0];
//var setName = nameStateVariable[1];

//return <h1>Bonjour, {name} !</h1>;
//};

//const App: FunctionComponent = () => {
//const [pokemons] = useState<Pokemon[]>(POKEMONS);
//return (
//<div>
//<h1>Pokédex</h1>
//<p>Il y a {pokemons.length} pokémons dans le Pokédex.</p>
// </div>
// );
//};

const App: FunctionComponent = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  // Hook effect
  useEffect(() => {
    setPokemons(POKEMONS); // 2 arguments  méthode du hook etat avec la liste POKEMONS et tableau vide
  }, []); // qui permet d'éviter déclencher le hook deffect  à chaque modif du composant
  return (
    <div>
      <h1 className='center'>Pokédex</h1>
      <div className='container'>
        <div className='row'>
          {pokemons.map(({ id, name, picture, created }) => (
            <div className='col s6 m4' key={id}>
              <div className='card-image'>
                <img src={picture} alt={name} />
              </div>
              <div className='card-stacked'>
                <div className='card-content'>
                  <p> {name}</p>
                  <p>
                    {" "}
                    <small> {created.toString()}</small>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
