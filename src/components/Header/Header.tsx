import React, { FC } from 'react';
import { PokemonFilter } from '../PokemonFilter';
import './Header.scss';

interface Props {
  pokemons: Pokemon[];
  filterParam(param: string): void;
}

export const Header: FC<Props> = ({ pokemons, filterParam }) => {
  return (
    <div className="jumbotron custom">
      <h1 className="display-3">Pokedex</h1>
      <p className="lead">
        You can see random Pokemon here ore choice your favorite Pokemon.
      </p>
      <hr className="my-4" />
      <PokemonFilter pokemons={pokemons} filterParam={filterParam} />
    </div>
  );
};
