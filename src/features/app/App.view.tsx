import { FC } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../layout/Navbar";

library.add(faStar);

interface Props {
    currentYear: number;
}

const AppView: FC<Props> = ({ currentYear }) => {
    return (
        <div>
            {/* Navbar */}
            <Navbar currentYear={currentYear} />

            {/* Card de Directorio de Bootcamps */}
            <div className="container mt-4">
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title">Directorio de Bootcamps</h5>
                    </div>
                    <div className="card-body">
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Buscar Bootcamps"
                            />
                        </div>

                        <div className="d-flex justify-content-between">
                            <button className="btn btn-outline-secondary">
                                Filtros
                            </button>
                            <button className="btn btn-primary">Agregar</button>
                        </div>

                        {/* Cartas de Bootcamps */}
                        <div className="row mt-4">
                            {[1, 2, 3, 4].map((bootcampId) => (
                                <div key={bootcampId} className="col-md-3 mb-4">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="card-title">
                                                Nombre del Bootcamp
                                            </h5>
                                            <div className="rating">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <FontAwesomeIcon
                                                        key={star}
                                                        icon={faStar}
                                                        className="star"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <textarea
                                                className="form-control"
                                                rows={4}
                                                placeholder="Detalles"
                                            ></textarea>
                                        </div>
                                        <div className="card-footer">
                                            <a
                                                className="btn btn-info"
                                                href="/bootcamp/view/1"
                                            >
                                                Ver más info
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
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

export default AppView;
