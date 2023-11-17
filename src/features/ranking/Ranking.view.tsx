import { FC } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { LazyLoadComponent } from "react-lazy-load-image-component";

library.add(faStar);

interface Props {
    currentYear: number;
}

const RankingView: FC<Props> = ({ currentYear }) => {
    const data = [
        {
            id: 1,
            nombre: "Bootcamp A",
            pais: "USA",
            modalidad: "Presencial",
            score: 90,
            insignias: 3,
        },
        {
            id: 2,
            nombre: "Bootcamp B",
            pais: "España",
            modalidad: "Online",
            score: 85,
            insignias: 2,
        },
        {
            id: 3,
            nombre: "Bootcamp C",
            pais: "México",
            modalidad: "Presencial",
            score: 88,
            insignias: 4,
        },
        {
            id: 4,
            nombre: "Bootcamp D",
            pais: "Argentina",
            modalidad: "Online",
            score: 78,
            insignias: 1,
        },
        // Agrega más datos según sea necesario
    ];

    return (
        <div>
            {/* Navbar */}
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
                            <li className="nav-item">
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

            {/* Ranking */}
            <div className="card">
                <div className="card-header">
                    <h3>Ranking de Bootcamps</h3>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>País</th>
                                    <th>Modalidad</th>
                                    <th>Score</th>
                                    <th>Insignias</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.nombre}</td>
                                        <td>{item.pais}</td>
                                        <td>{item.modalidad}</td>
                                        <td>{item.score}</td>
                                        <td>{item.insignias}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-4 bg-dark fixed-bottom">
                <div className="container text-center">
                    <p>&copy; {new Date().getFullYear()} Validador Bootcamp</p>
                </div>
            </footer>

            {/* Contenido de la aplicación */}
            {/* ... */}
        </div>
    );
};

export default RankingView;
