import axios from "axios";
import { useQuery } from "react-query";

interface ISprites {
  front_default: string;
}

interface IAbility {
  name: string;
  url: string;
}
interface ITypes {
  name: string;
  url: string;
}
interface IPokemonProps {
  sprites: ISprites;
  abilities: Array<{ ability: IAbility }>;
  types: Array<{ type: ITypes }>;
  weight: number;
  height: number;
}

interface IPokemonData {
  data: IPokemonProps;
  loading: boolean;
  error: boolean;
}

export const useGetPokemonById = (name: string): IPokemonData => {
  const pokemon = useQuery(`pokemon-${name}`, async () => {
    return await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  });
  return {
    data: pokemon.data?.data,
    loading: pokemon.isLoading,
    error: pokemon.isError,
  };
};
