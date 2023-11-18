// En Navbar.tsx
import { FC } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";

interface NavbarProps {
    currentYear: number;
}

const Navbar: FC<NavbarProps> = ({ currentYear }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/">
                    Validador de Bootcamps {currentYear}
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Inicio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/ranking">
                                Ranking de Bootcamps
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/backoffice">
                                Backoffice
                            </a>
                        </li>
                        <li className="nav-item ml-auto">
                            <a className="nav-link" href="/profile">
                                Usuario{" "}
                                <LazyLoadComponent>
                                    <img
                                        src={`https://picsum.photos/30`}
                                        alt="Perfil"
                                        className="rounded-full"
                                        style={{ borderRadius: "50%" }}
                                    />
                                </LazyLoadComponent>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
