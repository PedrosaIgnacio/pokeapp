import React, { ReactNode } from "react";
import { NavBar } from "../NavBar/NavBar";

interface ILayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <main className="w-100 d-flex flex-column ">
      <NavBar />
      {children}
    </main>
  );
};
