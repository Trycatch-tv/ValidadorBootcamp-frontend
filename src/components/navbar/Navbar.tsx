// En Navbar.tsx
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { FC } from "react"
import { LazyLoadComponent } from "react-lazy-load-image-component"
import { Link } from "react-router-dom"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../ui"
import { useState } from 'react';

interface NavbarLinkProps {
  name: string
  path: string
}

const routes: NavbarLinkProps[] = [
  {
    name: "Ranking de bootcamps",
    path: "/ranking",
  },
]

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

// Function to handle dropdown click
const handleDropdownClick = () => {
 setDropdownOpen(!dropdownOpen);
};

  return (
    <nav className="relative flex container mx-auto items-center container-lg justify-between mb-4">
      <Link to={"/"}>
        <h1 className="font-semibold">Validador de Bootcamps</h1>
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
                      className="text-xs text-gray-500"
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
                  className="text-xs text-gray-500"
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
     
        {routes.map((route, index) => {
          return (
            <div key={index}>
              <Link to={route.path}>
                <Button
                  className="text-xs text-gray-500"
                  size={"sm"}
                  variant={"link"}
                >
                  {route.name}
                </Button>
              </Link>
            </div>
          )
        })}
        <div>
          <button 
            id="dropdownDefaultButton" 
            className="relative z-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
            type="button" 
            onClick={handleDropdownClick}
          >
            Dashboard 
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>

        <div id="dropdown" className={`absolute top-[50px] left-auto right-15 z-50 w-44 bg-blue divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 ${dropdownOpen ? '' : 'hidden'}`}>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton"> 
            <li>
              <a href="/backoffice" className="block px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">Backoffice</a>
            </li>
            <li>
              <a href="/bootcamp" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Bootcamps</a>
            </li>
            <li>
              <a href="/reports" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reports</a>
            </li>
            <li>
              <a href="/users" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Users</a>
            </li>
          </ul>
        </div>
       </div>
          <Link to={"/profile"}>
            <Avatar>
              <LazyLoadComponent>
                <AvatarImage src="https://picsum.photos/30" alt="@shadcn" />
              </LazyLoadComponent>
            </Avatar>
          </Link>
    </nav>
  )
}

export default Navbar
