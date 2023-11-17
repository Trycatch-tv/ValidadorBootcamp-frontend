// En Navbar.tsx
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import React, { FC } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

interface NavbarLinkProps {
    name: string;
    path: string;
}

const routes: NavbarLinkProps[] = [
    {
        name: "Ranking de bootcamps",
        path: "/ranking",
    },
    {
        name: "backoffice",
        path: "/backoffice",
    }
]

interface NavbarProps {
    currentYear: number;
}

const Navbar: FC<NavbarProps> = ({ currentYear }) => {
    return (
        <nav className="flex container mx-auto items-center container-lg justify-between">
            <Link to={"/"}><h1 className="font-semibold">Validador de Bootcamps {currentYear}</h1></Link>
            <ul className="flex items-center">
                {
                    routes.map((route, index) => {
                        return (
                            <li  key={index}>
                                <Link to={route.path}><Button className="text-xs text-gray-500" size={"sm"} variant={"link"}>{route.name}</Button></Link>
                            </li>
                        )
                    })
                }
                <li>
                    <Link to={"/profile"}>
                        <Avatar>
                            <LazyLoadComponent>
                                <AvatarImage src="https://picsum.photos/30" alt="@shadcn" />
                            </LazyLoadComponent>
                        </Avatar>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
