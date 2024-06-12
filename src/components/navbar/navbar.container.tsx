// En Navbar.tsx
import type { FC } from "react";
import NavbarView from "./navbar.view";

const routes = [
  {
    name: "Ranking",
    path: "/ranking",
  },
  {
    name: "Backoffice",
    path: "/backoffice",
  },
];

type NavbarProps = {};

const NavbarContainer: FC<NavbarProps> = () => {
  return (
    <>
      <NavbarView routes={routes} />
    </>
  );
};

export default NavbarContainer;
