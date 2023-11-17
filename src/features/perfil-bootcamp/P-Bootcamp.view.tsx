// En BootcampProfileView.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import Layout from "@/layout/Layout";

const BootcampProfileView: React.FC = () => {
    const data = [
        {
            url: "https://picsum.photos/100",
            comentario: "Comentario 1",
        },
        {
            url: "https://picsum.photos/100",
            comentario: "Comentario 2",
        },
        {
            url: "https://picsum.photos/100",
            comentario: "Comentario 3",
        },
        {
            url: "https://picsum.photos/100",
            comentario: "Comentario 4",
        },
        // Agrega más datos según sea necesario
    ];

    return (
        <Layout>

            <div className="container mt-4">
                {/* Card principal */}
                <div className="card">
                    <div className="card-header">
                        <h3>Perfil del Bootcamp</h3>
                    </div>
                    <div className="card-body">
                        <div className="d-flex flex-wrap align-items-center justify-content-center mb-4">
                            {/* Imagen con LazyLoad */}
                            <LazyLoadComponent>
                                <img
                                    src={`https://picsum.photos/60`}
                                    alt="Bootcamp"
                                    className="rounded-full mb-2"
                                    style={{ borderRadius: "50%" }}
                                />
                            </LazyLoadComponent>

                            <div className="text-center mb-2">
                                <h4 className="mb-1">Nombre del Bootcamp</h4>
                                <span className="badge rounded-pill bg-success">
                                    Online
                                </span>{" "}
                                <button className="btn btn-success" disabled>
                                    Reputación: Alto
                                </button>
                            </div>
                        </div>
                        {/* Descripción y Insignias */}
                        <div className="alert alert-dismissible alert-warning">
                            <h4 className="alert-heading">¡Descripción!</h4>
                            <p className="mb-0">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam in ligula at est
                                ultrices laoreet. Nullam fringilla, mi a rhoncus
                                efficitur, mauris ligula consectetur metus, eu
                                facilisis eros tellus a arcu. Curabitur eget
                                nunc eget elit posuere accumsan. Quisque auctor
                                augue et eros bibendum, et scelerisque metus
                                suscipit. Proin auctor, elit vitae imperdiet
                                eleifend, tellus nulla consequat massa, sit amet
                                ullamcorper ligula turpis et libero. Nunc nec
                                erat id metus scelerisque suscipit eu ac justo.
                                Vivamus nec nisl justo. Vestibulum id augue
                                ligula. Integer vulputate lacus vel lectus
                                fermentum, vel cursus arcu dictum. Phasellus
                                venenatis nisl vel odio tincidunt, a lacinia mi
                                consequat. .
                            </p>
                        </div>
                        <div className="mb-4 text-center">
                            {/*  predeterminado de 4 */}
                            <div className="rating">
                                Insignias{" "}
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <FontAwesomeIcon
                                        key={star}
                                        icon={faStar}
                                        className="star"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Subcard Reviews */}
                        <div className="row">
                            {data.map((item, index) => (
                                // Subcard
                                <div
                                    key={index}
                                    className="col-12 col-md-6 mb-2"
                                >
                                    <div className="card text-center">
                                        <div className="card-body">
                                            <img
                                                src={item.url}
                                                alt={`Usuario ${index + 1}`}
                                                className="rounded-circle mb-2"
                                            />
                                            <p>{item.comentario}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Subcard Contenido */}
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5>Contenido</h5>
                                <p>Información detallada sobre el Bootcamp</p>
                            </div>
                        </div>
                        {/* Subcard Términos y Condiciones */}
                        <div className="card">
                            <div className="card-body">
                                <h5>Términos y Condiciones</h5>
                                <p>
                                    Cualquier cosa sobre términos y condiciones.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default BootcampProfileView;
