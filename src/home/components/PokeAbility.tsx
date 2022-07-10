import React from "react";
import { Badge } from "react-bootstrap";
import { useGetAbility } from "../../hooks/useGetAbility";

interface IAbilityProps {
  url: string;
  name: string;
}
export const PokeAbility = ({ url, name }: IAbilityProps) => {
  const { data } = useGetAbility(url, name);

  return (
    <>
      <div className="d-flex align-items-center mt-4 p-3 justify-content-start">
        <Badge bg="dark" className="mx-3 p-3 poke-font">
          {name.toUpperCase()}
        </Badge>
        <span className="poke-font fw-bold">
          {data?.effect_entries.map((ef) =>
            ef.language.name === "en" ? ef.effect : null
          )}
        </span>
      </div>
    </>
  );
};
