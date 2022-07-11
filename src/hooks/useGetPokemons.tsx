import axios from "axios";
import React, { useMemo } from "react";
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
  data: IPokemonList["results"];
  loading: boolean;
  error: boolean;
}

export const useGetPokemons = (name?: string): Pokemons => {
  const pokemon = useQuery(`pokemons`, async () => {
    return await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=152&offset=0"`
    );
  });

  const filteredPoks = useMemo(() => {
    if (name === undefined) {
      return (pokemon.data?.data as IPokemonList)?.results;
    }
    return (pokemon.data?.data as IPokemonList)?.results.filter((p) => {
      return p.name.includes(name);
    });
  }, [pokemon, name]);

  return {
    data: filteredPoks,
    loading: pokemon.isLoading,
    error: pokemon.isError,
  };
};
