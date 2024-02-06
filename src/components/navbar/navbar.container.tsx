// En Navbar.tsx
import { FC } from "react"
import NavbarView from "./navbar.view"

const routes = [
  {
    name: "Ranking",
    path: "/ranking",
  },
  {
    name: "Backoffice",
    path: "/backoffice",
  },
]

interface NavbarProps {}

const NavbarContainer: FC<NavbarProps> = () => {
  return (
    <>
      <NavbarView routes={routes} />
    </>
  )
}

export default NavbarContainer
