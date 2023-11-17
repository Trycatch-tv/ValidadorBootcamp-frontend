// En BootcampProfileView.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Avatar, AvatarImage, Badge, Card, CardContent, CardHeader } from "@/components/ui";
import { Header } from "@/components/header";



const BootcampProfileView: React.FC = () => {
    const data = [
        {
            url: "https://picsum.photos/100",
            comentario: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        },
        {
            url: "https://picsum.photos/100",
            comentario: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        },
        {
            url: "https://picsum.photos/100",
            comentario: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        },
        {
            url: "https://picsum.photos/100",
            comentario: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        },
        {
            url: "https://picsum.photos/100",
            comentario: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        },
        // Agrega más datos según sea necesario
    ];

    return (
        <>
            <Header/>
            <div className="container container-lg pt-16 pb-20">

                {/* Card principal */}
                    <div className="flex flex-wrap align-items-center gap-4 justify-between mb-4">
                        {/* Imagen con LazyLoad */}
                        <div className="flex gap-4" >
                            <LazyLoadComponent>
                                <Avatar className="h-14 w-14">
                                    <AvatarImage src={`https://picsum.photos/60`}></AvatarImage>
                                </Avatar>
                            </LazyLoadComponent>

                            <div className="">
                                <h4 className="mb-1 font-semibold">Nombre del Bootcamp</h4>
                                <Badge variant={"secondary"}>Online</Badge>
                            </div>
                        </div>
                        <Badge className="h-[22px] text-gray-700 bg-green-300" variant={"secondary"}>
                            Reputación: Alto
                        </Badge>
                    </div>
                    {/* Descripción y Insignias */}
                    <div >
                        <h4 className=" font-semibold my-8">Descripcion</h4>
                        <p className="text-muted-foreground ">
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
                        <div className="my-8 ">
                            {/*  predeterminado de 4 */}
                            <div className="flex gap-2 items-center">
                                <span className="font-semibold text-black">Insignias</span>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <FontAwesomeIcon
                                        key={star}
                                        icon={faStar}
                                        className="star"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Subcard Reviews */}
                    <h4 className=" font-semibold my-8">Reviews</h4>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3  justify-center">
                        {data.map((item, index) => (
                            // Subcard
                            <Card
                                className="min-w-[250px] max-w-[350px]"
                                key={index}
                            >
                                <CardHeader>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-muted-foreground">{new Date().toLocaleDateString()}</span>
                                        <div className="flex gap-2">
                                            <p className="text-xs text-muted-foreground">Name</p>
                                            <Avatar>
                                                <AvatarImage src={`https://picsum.photos/60`}></AvatarImage>
                                            </Avatar>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">{item.comentario}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="my-8">
                        {/* Subcard Contenido */}
                        <Accordion type="single" collapsible className="w-full">

                            <AccordionItem value="item-1">
                                <AccordionTrigger>Contenido</AccordionTrigger>
                                <AccordionContent>
                                    Información detallada sobre el Bootcamp
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Accordion type="single" collapsible className="w-full">
                            {/* Subcard Términos y Condiciones */}

                            <AccordionItem value="item-2">
                                <AccordionTrigger>Términos y Condiciones</AccordionTrigger>
                                <AccordionContent>
                                    Cualquier cosa sobre términos y condiciones.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
            </div>
        </>
    );
};

export default BootcampProfileView;
