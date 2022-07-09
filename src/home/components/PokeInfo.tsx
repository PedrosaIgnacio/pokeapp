import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetPokemonById } from "../../hooks/useGetPokemonById";
import { PokeAbility } from "./PokeAbility";
import { PokeType } from "./PokeType";
import audio from "../../audio/clickAudio.mp3";
import { Howl, Howler } from "howler";
export const PokeInfo = () => {
  const navigate = useNavigate();

  const { name: pokeName } = useParams();

  const { data } = useGetPokemonById(pokeName as string);

  const { Howl, Howler } = require("howler");

  var sound = new Howl({
    src: [audio],
  });
  return (
    <div key={pokeName} className="d-flex bg-poke">
      <div
        className="d-flex w-100 align-items-end  animate__animated animate__fadeInLeft"
        style={{ height: "100vh" }}
      >
        <div className="d-flex">
          <div className="mt-3">
            <h4 className="poke-font fw-bold">{pokeName?.toUpperCase()}</h4>
            <img
              alt="..."
              src={data.sprites.front_default}
              style={{
                width: "18rem",
              }}
              className="poke-img d-block"
            />
          </div>
          <div className="mx-2">
            <blockquote className="poke-font fw-bold blockquote mt-3">
              TYPES
            </blockquote>
            <div>
              {data?.types.map((t) => {
                return <PokeType key={t.type.name} type={t.type} />;
              })}
            </div>
          </div>
          <div>
            <blockquote className="blockquote poke-font fw-bold mt-3">
              ABILITIES
            </blockquote>
            <div>
              {data.abilities.map((m) => {
                return (
                  <PokeAbility
                    key={pokeName}
                    url={m.ability.url}
                    name={m.ability.name}
                  />
                );
              })}
            </div>
          </div>

          <div className="mx-2">
            <blockquote className="blockquote poke-font fw-bold mt-3">
              Weight
            </blockquote>
            <span className="fw-bold poke-font">{data.weight}</span>
          </div>
          <div className="mx-2">
            <blockquote className="blockquote poke-font fw-bold mt-3">
              Height
            </blockquote>
            <span className="fw-bold poke-font">{data.height}</span>
          </div>
        </div>
      </div>
      <div className="m-3">
        <button
          className="btn btn-dark poke-font"
          onClick={() => {
            sound.play();
            navigate("/", { replace: true });
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};
