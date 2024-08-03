import { useAuthStore } from "@/stores/auth/auth.store"
import { FC } from "react"
import { useNavigate } from "react-router-dom"
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
  const navigate = useNavigate()
  const { user, signOut } = useAuthStore((state) => state)

  return (
    <>
      <NavbarView
        routes={routes}
        user={user}
        navigate={navigate}
        signOut={signOut}
      />
    </>
  )
}

export default NavbarContainer
