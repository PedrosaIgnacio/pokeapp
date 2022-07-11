import React, { ChangeEvent } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const navigation = useNavigate();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const url = new URLSearchParams();
    if (e.target.value !== "") {
      url.set("q", e.target.value.toLowerCase());
    }
    navigation(`?${url.toString()}`, { replace: true });
  };
  return (
    <div>
      <form className="mt-3">
        <div className="d-flex justify-content-center">
          <div className="form-group col-lg-2 col-md-3 col-sm-4">
            <input
              name="name"
              id="name"
              className="form-control"
              placeholder="Search pokemon"
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
