import { UserModel } from "@/models/user.model"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@radix-ui/react-menubar"
import { Menu } from "lucide-react"
import { FC } from "react"
import { LazyLoadComponent } from "react-lazy-load-image-component"
import { Link } from "react-router-dom"
import { Avatar, AvatarImage, Button } from "../ui"

interface NavbarLinkProps {
  name: string
  path: string
  roles: string[]
}

interface PropsInterface {
  routes: NavbarLinkProps[]
  user: UserModel
  navigate: any
  signOut: () => void
}

const NavbarView: FC<PropsInterface> = ({
  routes,
  user,
  navigate,
  signOut,
}) => {
  return (
    <>
      <nav className="flex w-full h-14 mx-auto pl-4 pr-4 items-center justify-between bg-gray-900">
        <Link to={"/"}>
          <span className="text-2xl font-semibold text-white">GlassCamp</span>
        </Link>
        <Menubar className="md:hidden ">
          <MenubarMenu>
            <MenubarTrigger>
              <Menu />
            </MenubarTrigger>
            <MenubarContent>
              {routes.map((route, index) => {
                return (
                  <MenubarItem key={index}>
                    <Link to={route.path}>
                      <Button
                        className="text-xs text-gray-200"
                        size={"sm"}
                        variant={"link"}
                      >
                        {route.name}
                      </Button>
                    </Link>
                  </MenubarItem>
                )
              })}
              <MenubarItem>
                <Link to={"/profile"}>
                  <Button
                    className="text-xs text-gray-200"
                    size={"sm"}
                    variant={"link"}
                  >
                    Profile
                  </Button>
                </Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <ul className="hidden md:flex  items-center">
          {routes
            .filter((route) => route.roles.includes(user.role))
            .map((route, index) => {
              return (
                <>
                  <li key={index}>
                    <Link to={route.path}>
                      <Button
                        className="text-xs text-gray-400 hover:text-white"
                        size={"sm"}
                        variant={"link"}
                      >
                        {route.name}
                      </Button>
                    </Link>
                  </li>
                </>
              )
            })}
          {!user.isLogedIn ? (
            <>
              <li>
                <Button
                  className="text-xs text-gray-400 hover:text-white"
                  size={"sm"}
                  variant={"link"}
                  onClick={() => {
                    navigate("/signin")
                  }}
                >
                  Sign In
                </Button>
              </li>
              <li>
                <Button
                  className="text-xs text-gray-400 hover:text-white"
                  size={"sm"}
                  variant={"link"}
                  onClick={() => {
                    navigate("/signup")
                  }}
                >
                  Sign Up
                </Button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Button
                  className="text-xs text-gray-400 hover:text-white"
                  size={"sm"}
                  variant={"link"}
                  onClick={() => {
                    signOut()
                  }}
                >
                  SignOut
                </Button>
              </li>
              <li>
                <Link to={"/profile"}>
                  <div className="flex flex-row justify-center items-center">
                    <span className="text-gray-400 mr-2 text-sm">
                      {user.first_name}
                    </span>
                    <Avatar>
                      <LazyLoadComponent>
                        <AvatarImage
                          src="https://static-00.iconduck.com/assets.00/profile-default-icon-1024x1023-4u5mrj2v.png"
                          alt={user.first_name}
                        />
                      </LazyLoadComponent>
                    </Avatar>
                  </div>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  )
}

export default NavbarView
