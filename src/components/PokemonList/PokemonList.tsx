import React, { FC } from 'react';
import { Loader } from '../Loader';
import './PokemonList.scss';

interface Props {
  pokemons: Pokemon[];
  heroClick(name: string): void;
  isLoading: boolean;
}

export const PokemonList: FC<Props> = ({ pokemons, heroClick, isLoading }) => {
  const handleClick = (name: string) => {
    heroClick(name);
  };

  return (
    <div className="grid-container">
      {pokemons.map(hero => (
        <div
          key={hero.name}
          className="card mb-3"
          tabIndex={0}
          role="button"
          onClick={() => handleClick(hero.name)}
          onKeyDown={() => handleClick(hero.name)}
        >
          {isLoading
            ? <Loader />
            : (
              <>
                <h3 className="card-header">{hero.name}</h3>
                <div className="card-body">
                  <img
                    className="pokemon"
                    src={hero.img}
                    alt="Card"
                  />
                </div>
              </>
            )}

          <div className="card-footer text-muted d-flex justify-content-between">
            {!isLoading && (
              <>
                {hero.pokemonItem && (
                  hero.pokemonItem.types.map((t: TypesFromServer) => <span key={hero.name + t.type.name} className="badge badge-primary">{t.type.name}</span>)
                )}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
