import React from "react";
import "../Home.css";

interface IType {
  url: string;
  name: string;
}
interface IPokeTypePropos {
  type: IType;
}

export const PokeType = ({ type }: IPokeTypePropos) => {
  return (
    <div className="mt-2">
      <span
        className={`${type.name} badge rounded-pill`}
        style={{ fontSize: "12px" }}
      >
        {type?.name.toUpperCase()}
      </span>
    </div>
  );
};
