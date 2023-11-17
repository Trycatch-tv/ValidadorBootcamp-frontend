import { FC } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../layout/Navbar";

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
            <Navbar currentYear={currentYear} />

            <div className="container mt-4">
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
                        <p>
                            &copy; {new Date().getFullYear()} Validador Bootcamp
                        </p>
                    </div>
                </footer>

                {/* Contenido de la aplicación */}
                {/* ... */}
            </div>
        </div>
    );
};

export default RankingView;
