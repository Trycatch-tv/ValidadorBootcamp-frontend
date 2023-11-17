import React, { FC } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Layout from "../../layout/Layout";
import { Filter, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui";

library.add(faStar);

interface Props {
    currentYear: number;
}

const AppView: FC<Props> = ({ currentYear }) => {
    return (
        <Layout>
            <div>
                <CardHeader>
                    <h5 className="font-semibold ">Directorio de Bootcamps</h5>

                </CardHeader>
                <CardContent>
                    <div className="flex gap-3">
                        <Input id="name" placeholder="Name of your project" />
                        <div className="flex justify-content-between gap-2">
                            <Button size={"sm"} className="text-xs" variant="outline">
                                <Filter className="mr-2 h-4 w-4" />
                                Filtros
                            </Button>
                            <Button size={"sm"} className="text-xs" >
                                <Plus className="mr-2 h-4 w-4" />
                                Agregar
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-wrap  justify-between mt-4">
                    {[1, 2, 3, 4].map((bootcampId) => (
                        <Card key={bootcampId} className="col-md-3 mb-4">
                            <CardHeader>
                                <CardTitle className="text-lg min-w-[240px]">
                                    Nombre del Bootcamp
                                </CardTitle>
                                <div className="rating">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <FontAwesomeIcon
                                            key={star}
                                            icon={faStar}
                                            className="star"
                                        />
                                    ))}
                                </div>
                            </CardHeader>
                            <CardContent className="card-body">
                                <textarea
                                    className="form-control"
                                    rows={4}
                                    placeholder="Detalles"
                                ></textarea>
                            </CardContent>
                            <CardFooter className="card-footer">
                                <Link to={"/bootcamp/view/1"}>
                                    <Button size={"sm"} className="text-xs">
                                        Ver mas info
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>


                </CardContent>

                

            </div>
        </Layout>
    );
};

export default AppView;
