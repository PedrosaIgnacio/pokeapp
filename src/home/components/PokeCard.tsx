import React from "react";
import { Link } from "react-router-dom";
import { useGetPokemonById } from "../../hooks/useGetPokemonById";
import { PokeType } from "./PokeType";
import audio from "../../audio/clickAudio.mp3";

interface IPokemon {
  name: string;
  url: string;
}

interface IPokeProps {
  poke: IPokemon;
}

export const PokeCard = ({ poke }: IPokeProps) => {
  const { data: pokedata } = useGetPokemonById(poke.name);

  const { Howl } = require("howler");

  var sound = new Howl({
    src: [audio],
  });

  const handleClick = () => {
    sound.play();
  };

  return (
    <>
      <Link
        onClick={handleClick}
        to={`/pokemon/${poke.name}`}
        className="shadow poke_card text-decoration-none"
      >
        <div className="d-flex">
          <div className="col-6 m-auto">
            <blockquote className="blockquote">
              {poke.name.toUpperCase()}
            </blockquote>
            {pokedata?.types?.map((poketype) => {
              return <PokeType key={poketype.type.name} type={poketype.type} />;
            })}
          </div>

          <img
            alt="..."
            src={pokedata?.sprites.front_default}
            className="col-6"
          />
        </div>
      </Link>
    </>
  );
};
