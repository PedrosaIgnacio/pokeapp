import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetPokemonById } from "../../hooks/useGetPokemonById";
import { PokeAbility } from "./PokeAbility";
import { PokeType } from "./PokeType";
import audio from "../../audio/clickAudio.mp3";
import { Howl, Howler } from "howler";
import { ErrorScreen } from "./ErrorScreen";

export const PokeInfo = () => {
  const navigate = useNavigate();

  const { name: pokeName } = useParams();

  const { data } = useGetPokemonById(pokeName as string);

  const { Howl, Howler } = require("howler");

  var sound = new Howl({
    src: [audio],
  });

  if (data) {
    return (
      <div key={pokeName} className="d-flex flex-wrap bg-poke">
        <div
          className="d-flex flex-wrap w-100 align-items-end  animate__animated animate__fadeInLeft"
          style={{ height: "100vh" }}
        >
          <button
            className="btn btn-dark poke-font mx-5 mt-3"
            onClick={() => {
              sound.play();
              navigate(-1);
            }}
          >
            BACK
          </button>
          <div className="d-flex flex-wrap">
            <div>
              <h4 className="poke-font fw-bold">ABILITIES</h4>
              <div>
                {data?.abilities.map((m, ind) => {
                  return (
                    <PokeAbility
                      key={ind}
                      url={m.ability.url}
                      name={m.ability.name}
                    />
                  );
                })}
              </div>
            </div>

            <div className="mt-3 mx-3">
              <h4 className="poke-font fw-bold">{pokeName?.toUpperCase()}</h4>
              <img
                alt="..."
                src={data?.sprites.front_default}
                className="poke-img"
              />
            </div>
            <div className="mx-3">
              <h4 className="poke-font fw-bold mt-3">TYPES</h4>
              <div>
                {data?.types.map((t, ind) => {
                  return <PokeType key={ind} type={t.type} />;
                })}
              </div>
            </div>
            <div className="mx-3">
              <h4 className=" poke-font fw-bold mt-3">WEIGHT</h4>
              <span className="fw-bold poke-font">{data?.weight}kg</span>
            </div>
            <div className="mx-3">
              <h4 className=" poke-font fw-bold mt-3">HEIGHT</h4>
              <span className="fw-bold poke-font">{data?.height}kg</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <ErrorScreen />;
  }
};

// return (
//   <div key={pokeName} className="d-flex flex-wrap bg-poke">
//     <div className="d-flex flex-wrap w-100 align-items-end  animate__animated animate__fadeInLeft vh100">
//       <button
//         className="btn btn-dark poke-font mx-5 mt-3"
//         onClick={() => {
//           sound.play();
//           navigate(-1);
//         }}
//       >
//         BACK
//       </button>
//       <div className="d-flex flex-wrap">
//         <div>
//           <blockquote className="blockquote poke-font fw-bold">
//             ABILITIES
//           </blockquote>
//           <div>
//             {data?.abilities.map((m, ind) => {
//               return (
//                 <PokeAbility
//                   key={ind}
//                   url={m.ability.url}
//                   name={m.ability.name}
//                 />
//               );
//             })}
//           </div>
//         </div>

//         <div className="mt-3">
//           <h4 className="poke-font fw-bold">{pokeName?.toUpperCase()}</h4>
//           <img
//             alt="..."
//             src={data?.sprites.front_default}
//             style={{
//               width: "18rem",
//             }}
//             className="poke-img"
//           />
//         </div>
//         <div className="mx-2">
//           <blockquote className="poke-font fw-bold blockquote mt-3">
//             TYPES
//           </blockquote>
//           <div>
//             {data?.types.map((t, ind) => {
//               return <PokeType key={ind} type={t.type} />;
//             })}
//           </div>
//         </div>
//         <div className="mx-2">
//           <blockquote className="blockquote poke-font fw-bold mt-3">
//             WEIGHT
//           </blockquote>
//           <span className="fw-bold poke-font">{data?.weight}</span>
//         </div>
//         <div className="mx-2">
//           <blockquote className="blockquote poke-font fw-bold mt-3">
//             HEIGHT
//           </blockquote>
//           <span className="fw-bold poke-font">{data?.height}</span>
//         </div>
//       </div>
//     </div>
//   </div>
// );
