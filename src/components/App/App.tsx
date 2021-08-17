import React, { FC, useState, useEffect } from 'react';
import { getData } from '../../api/api';
import { Details } from '../Details';
import { PokemonList } from '../PokemonList';
import { Header } from '../Header';
import { ButtonMore } from '../ButtonMore';

import 'bootswatch/dist/slate/bootstrap.min.css';
import './App.scss';

export const App: FC = () => {
  const random: number = Math.floor(Math.random() * (500 - 1 + 1));
  const [pokemon, setPokemon] = useState<number|string>(random);
  const [pokemons, setPokemons] = useState<Array<Pokemon>|[]>([]);
  const [pokemonsVisible, setPokemonsVisible] = useState<Array<Pokemon>|[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [offset, setOffset] = useState(12);

  useEffect(() => {
    setIsLoading(true);
    const fetchSata = async () => {
      interface Response {
        results: Pokemon[];
      }
      const pokemonsList: Response = await getData(`?limit=${offset}`);

      const currentPokemons: Pokemon[] = await Promise
        .all(pokemonsList.results.map(async (result) => {
          const response = await fetch(result.url);
          const pokemonItem = await response.json();

          return {
            ...result,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonItem.id}.png`,
            pokemonItem,
          };
        }));

      setPokemons(currentPokemons);
      setPokemonsVisible(currentPokemons);
    };

    fetchSata().then(() => {
      setIsLoading(false);
    }).catch((errorFromServer) => {
      setError(errorFromServer.message || 'error');
    });
  }, [offset]);

  const handleLoadMore = () => {
    setOffset(offset + 12);
  };

  const setPokemonName = (name: string) => {
    setPokemon(name);
  };

  const setFilterParam = (filterParam: string) => {
    if (filterParam === 'all') {
      return setPokemonsVisible(pokemons);
    }

    setPokemonsVisible(pokemons
      .filter(hero => hero.pokemonItem?.types
        .some(item => item.type.name === filterParam)));

    return filterParam;
  };

  return (
    <div className="container">
      <div className="row">
        <Header pokemons={pokemons} filterParam={setFilterParam} />
      </div>
      <div className="row d-flex align-items-start justify-content-between">
        {error
          ? <p>{error}</p>
          : (
            <>
              <main className="pokemons-list">
                <PokemonList
                  pokemons={pokemonsVisible}
                  heroClick={setPokemonName}
                  isLoading={isLoading}
                />
              </main>
              <aside className="details">
                <Details heroFromList={pokemon} isLoading={isLoading} />
              </aside>
            </>
          )}
      </div>
      <div className="row d-flex justify-content-center">
        <ButtonMore getMore={handleLoadMore} />
      </div>
    </div>
  );
};
