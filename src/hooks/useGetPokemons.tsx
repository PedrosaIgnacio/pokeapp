import axios from "axios";
import { useQuery } from "react-query";

interface IPokemon {
  name: string;
  url: string;
}
interface IPokemonList {
  count: number;
  next: null;
  previous: null;
  results: Array<IPokemon>;
}

interface Pokemons {
  data: IPokemonList;
  loading: boolean;
  error: boolean;
}

export const useGetPokemons = (): Pokemons => {
  const pokemons = useQuery("pokemons", async () => {
    return await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=152&offset=0"
    );
  });
  return {
    data: pokemons.data?.data,
    loading: pokemons.isLoading,
    error: pokemons.isError,
  };
};
