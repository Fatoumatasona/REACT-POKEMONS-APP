import React, { FunctionComponent, useState } from "react";
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

const App: FunctionComponent = () => {
  //const name: String = "React";
  const [pokemons] = useState<Pokemon[]>(POKEMONS);
  // code détaillé
  // var nameStateVariable = useState('React');
  //var name = nameStateVariable[0];
  //var setName = nameStateVariable[1];

  return (
    <div>
      <h1>Pokédex</h1>
      <p>Il y a {pokemons.length} pokémons dans le Pokédex.</p>
    </div>
  );
};

export default App;
