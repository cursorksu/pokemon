import React, { FC } from 'react';
import './PokemonFilter.scss';

interface Props {
  pokemons: Pokemon[];
  filterParam(param: string): void;
}

export const PokemonFilter: FC<Props> = ({ pokemons, filterParam }) => {
  const temp: string[] = ['all'];

  pokemons
    .map(hero => hero.pokemonItem && hero.pokemonItem.types
      .map((t: TypesFromServer) => {
        if (!temp.includes(t.type.name)) {
          temp.push(t.type.name);
        }

        return t.type.name;
      }));

  const handleClick = (filterBy: string) => {
    filterParam(filterBy);
  };

  return (
    <ul className="filter">
      {temp.map((t) => (
        <li key={t}>
          <button
            type="button"
            className="badge badge-primary"
            onClick={() => handleClick(t)}
          >
            {t}
          </button>
        </li>
      ))}
    </ul>
  );
};
