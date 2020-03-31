// eslint-disable-next-line
/// <reference types="react-scripts" />

interface Pokemon {
  name: string;
  url: string;
  img?: string;
  pokemonItem?: HeroFromServer;
}

interface Hero {
  id: number;
  name: string;
  img: string;
  types: string[];
  attack: number;
  defense: number;
  hp: number;
  spAttack: number;
  spDefense: number;
  speed: number;
  weight: number;
  totalMoves: number;
}


interface SpeciesFromServer {
  name: string;
  url: string;
}

interface MovesFromServer {
  move: {name: string; url: string};
}

interface SpritesFromServer {
  front_shiny: string;
}

interface StatsFromServer {
  base_stat: number;
  effort: number;
  stat: SpeciesFromServer;
}

interface TypesFromServer {
  slot: number;
  type: SpeciesFromServer;
}

interface HeroFromServer {
  id: number;
  species: SpeciesFromServer[];
  moves: MovesFromServer[];
  name: string;
  sprites: SpritesFromServer;
  stats: StatsFromServer[];
  types: TypesFromServer[];
  weight: number;
}
