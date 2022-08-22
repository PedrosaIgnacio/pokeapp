import React from "react";
import { Layout } from "../layout/Layout";
import { useGetPokemons } from "../hooks/useGetPokemons";
import { PokeCard } from "./components/PokeCard";
import { useLocation } from "react-router-dom";
import { SearchBar } from "./components/SearchBar";

export const Home = () => {
  const location = useLocation();

  const search = new URLSearchParams(location.search);

  const { data: pokemons } = useGetPokemons(search.get("q") ?? undefined);

  return (
    <Layout>
      <div style={{ backgroundColor: "#f5f5f7" }}>
        <SearchBar />
        <div className="d-flex flex-wrap justify-content-center mt-3">
          {pokemons?.length === 0 ? (
            <p className="text-danger">No hay resultados</p>
          ) : (
            pokemons?.map((p, i) => {
              return <PokeCard key={i} poke={p} />;
            })
          )}
        </div>
      </div>
    </Layout>
  );
};
