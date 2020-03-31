import { BASE_URL } from '../constants/constants';

export const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(BASE_URL + url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json()
    .catch(error => error);
};

export const getPokemonItem = (name: string|number) => {
  return getData<HeroFromServer>(`${name}`).then((item) => {
    return {
      img: `https://pokeres.bastionbot.org/images/pokemon/${item.id}.png`,
      id: item.id,
      name: item.name,
      types: item.types.map((t: TypesFromServer) => t.type.name),
      attack: item.stats.find((el: StatsFromServer) => el.stat.name === 'attack')?.base_stat as number,
      defense: item.stats.find((el: StatsFromServer) => el.stat.name === 'defense')?.base_stat as number,
      hp: item.stats.find((el: StatsFromServer) => el.stat.name === 'hp')?.base_stat as number,
      spAttack: item.stats.find((el: StatsFromServer) => el.stat.name === 'special-attack')?.base_stat as number,
      spDefense: item.stats.find((el: StatsFromServer) => el.stat.name === 'special-defense')?.base_stat as number,
      speed: item.stats.find((el: StatsFromServer) => el.stat.name === 'speed')?.base_stat as number,
      weight: item.weight,
      totalMoves: item.moves.length,
    };
  });
};
