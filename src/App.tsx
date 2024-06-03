import React, { FunctionComponent } from "react";
import PokemonList from "./pages/pokemon-list";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import PokemonsDetail from "./pages/pokemon-details";
const App: FunctionComponent = () => {
  return (
    <Router>
      <div>
        {/* La barre de navigation commun à toutes les pages*/}
        <nav>
          <div className='nav-wrapper teal'>
            <Link to='/' className='brand-logo center'>
              Pokédex
            </Link>
          </div>
        </nav>
        {/* Le système de gestion des route de l'apllication*/}
        <Switch>
          <Route exact path='/' component={PokemonList} />
          <Route exact path='/pokemons' component={PokemonList} />
          <Route path='/pokemons/:id' component={PokemonsDetail} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
