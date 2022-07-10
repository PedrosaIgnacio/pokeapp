import React from "react";
import { useNavigate } from "react-router-dom";
import audio from "../../audio/clickAudio.mp3";
import { Howl, Howler } from "howler";
import ash from "../../imgs/ash.png";
export const ErrorScreen = () => {
  const navigate = useNavigate();

  const { Howl, Howler } = require("howler");

  var sound = new Howl({
    src: [audio],
  });

  return (
    <>
      <div className="d-flex bg-poke">
        <div
          className="d-flex w-100 align-items-end  animate__animated animate__fadeInLeft"
          style={{ height: "100vh" }}
        >
          <div className="d-flex justify-content-center h-100">
            <button
              className="btn btn-dark poke-font mx-5 mt-3"
              style={{ height: "3rem" }}
              onClick={() => {
                sound.play();
                navigate("/", { replace: true });
              }}
            >
              BACK
            </button>
          </div>
          <div>
            <div className="my-3">
              <span className="dialog p-3 poke-font">
                Pokemon doesn't exist
              </span>
            </div>
            <img
              alt="..."
              src={ash}
              style={{
                width: "18rem",
              }}
              className="poke-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};
