import React, { FC, useState, useEffect } from 'react';
import { getPokemonItem } from '../../api/api';
import { initialHero } from '../../constants/constants';
import { Loader } from '../Loader';
import './Details.scss';

interface Props {
  heroFromList: string|number;
  isLoading: boolean;
}

export const Details: FC<Props> = ({ heroFromList, isLoading }) => {
  const [pokemon, setPokemon] = useState<Hero>(initialHero);

  useEffect(() => {
    getPokemonItem(heroFromList).then((hero: Hero) => {
      setPokemon(hero);
    });
  }, [heroFromList]);

  return (
    <div className="card mb-3">
      {isLoading
        ? <Loader />
        : (
          <>
            <h3 className="card-header">{`#${pokemon.id} ${pokemon.name}`}</h3>
            <div className="card-body">
              <img
                className="pokemon"
                src={pokemon.img}
                alt="Card"
              />
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                  <span>Type:</span>
                  {pokemon.types.map((t: string) => <span key={t}>{t}</span>)}
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Attacks:</span>
                  <span>{pokemon.attack}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Defense:</span>
                  <span>{pokemon.defense}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>HP:</span>
                  <span>{pokemon.hp}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>SP Attack:</span>
                  <span>{pokemon.spAttack}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>SP Defense:</span>
                  <span>{pokemon.spDefense}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Speed:</span>
                  <span>{pokemon.speed}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Weight:</span>
                  <span>{ pokemon.weight }</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total Movies:</span>
                  <span>{ pokemon.totalMoves }</span>
                </li>
              </ul>
            </div>
          </>
        )}
    </div>
  );
};
