// En BootcampProfileView.tsx
import NavbarContainer from "@/components/navbar/navbar.container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Avatar,
  AvatarImage,
  Badge,
  Button,
} from "@/components/ui";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ListProgramContainer from "@/features/program/list/list.program.container";
import AddReviewContainer from "@/features/review/add/add.review.container";
import CardReviewContainer from "@/features/review/card/card.review.container";
import type { BootcampModel } from "@/models/bootcamp.model";
import type { ReviewModel } from "@/models/review.model";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import {
  BookmarkIcon,
  Facebook,
  Globe,
  Instagram,
  Link2,
  ListOrdered,
  MessageSquarePlus,
  ShieldCheck,
} from "lucide-react";
import type { FC } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

interface PropsInterface {
  bootcamp: BootcampModel;
  avatar: string;
  reviews: ReviewModel[];
  termsAndConditions: string;
  isDialogOpen: boolean;
  closeDialog: () => void;
  setDialogOpen: (value: boolean) => void;
}

const ProfileBootcampView: FC<PropsInterface> = ({
  reviews,
  bootcamp,
  avatar,
  termsAndConditions,
  isDialogOpen,
  closeDialog,
  setDialogOpen,
}) => {
  return (
    <>
      <NavbarContainer />
      <div className="container container-lg pt-16 pb-20">
        {/* Card principal */}
        <div className="flex flex-wrap align-items-center gap-4 justify-between mb-4">
          {/* Imagen con LazyLoad */}
          <div className="flex gap-4">
            <LazyLoadComponent>
              <Avatar className="h-14 w-14">
                <AvatarImage src={avatar}></AvatarImage>
              </Avatar>
            </LazyLoadComponent>
            <div className="">
              <div className="mb-1 font-semibold flex items-center justify-start">
                {bootcamp.name}
                {bootcamp.is_verified ? (
                  <ShieldCheck className="size-3.5 text-blue-400 fill-blue-200 ml-0.5" />
                ) : (
                  ""
                )}
                {bootcamp.is_endorsed ? (
                  <>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <ShieldCheck className="size-3.5 text-orange-400 fill-orange-200 ml-0.5" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <div className="bg-gray-950 p-2 rounded-md ml-7 mb-0.5">
                            <p className="text-xs text-muted-foreground text-white">
                              {bootcamp.endorsed_by}
                            </p>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </>
                ) : (
                  ""
                )}
              </div>
              <div className="flex flex-row items-center gap-2">
                <Badge variant={"secondary"} className="capitalize">
                  <Globe className="size-4 mr-1" />
                  {bootcamp.mode}
                </Badge>
                <Link
                  to={`${bootcamp.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Badge
                    variant={"secondary"}
                    className=" hover:bg-blue-950 hover:text-white cursor-pointer"
                  >
                    <Link2 className="size-4 mr-2" />
                  </Badge>
                </Link>
                <Link
                  to={bootcamp.facebook_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Badge
                    variant={"secondary"}
                    className=" hover:bg-blue-950 hover:text-white cursor-pointer"
                  >
                    <Facebook className="size-4" />
                  </Badge>
                </Link>
                <Link
                  to={`${bootcamp.instragram_url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Badge
                    variant={"secondary"}
                    className=" hover:bg-blue-950 hover:text-white cursor-pointer"
                  >
                    <Instagram className="size-4" />
                  </Badge>
                </Link>
              </div>
            </div>
          </div>
          <Badge
            className="h-[22px] text-gray-700 bg-green-300"
            variant={"secondary"}
          >
            <ListOrdered className="size-4 mr-1" />{" "}
            {bootcamp?.score?.toFixed(4)}
          </Badge>
        </div>
        {/* Descripción y Insignias */}
        <div>
          <h4 className=" font-semibold my-8">Descripcion</h4>
          <p className="text-muted-foreground ">{bootcamp.description}</p>
          <div className="my-8 ">
            {/*  predeterminado de 4 */}
            <div className="flex gap-2 items-center">
              <span className="font-semibold text-black">Insignias</span>
              {[1, 2, 3, 4, 5].map((star) => (
                <FontAwesomeIcon key={star} icon={faStar} className="star" />
              ))}
            </div>
          </div>
        </div>
        {/* Subcard Reviews */}
        <h4 className=" font-semibold my-8">Reviews</h4>

        <div>
          <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger>
              <Button size="xs">
                <MessageSquarePlus width="16" height="16" className="mr-1 " />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Agregar Review</DialogTitle>
                <DialogDescription>
                  <AddReviewContainer
                    bootcampId={bootcamp.id}
                    closeDialog={closeDialog}
                  />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3  justify-center">
          {Array.isArray(reviews) &&
            reviews.map((review: ReviewModel) => (
              <CardReviewContainer review={review} />
            ))}
        </div>
        <div className="my-8 ">
          {/* Subcard Contenido */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Programas (Falta agregar el campo precio al programa)
              </AccordionTrigger>
              <AccordionContent>
                <ListProgramContainer bootcampId={bootcamp.id} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="w-full">
            {/* Subcard Términos y Condiciones */}

            <AccordionItem value="item-2">
              <AccordionTrigger>Términos y Condiciones</AccordionTrigger>
              <AccordionContent>
                <div className="w-full">
                  <div className="w-full mt-2">
                    <div className="px-2 py-2.5 flex flex-col items-center justify-center">
                      <Dialog>
                        <DialogTrigger>
                          <Button size="xs">
                            <BookmarkIcon
                              width="16"
                              height="16"
                              className="mr-1"
                            />
                            <span className="ml-2">
                              Ver Términos y Condiciones
                            </span>
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Términos y Condiciones</DialogTitle>
                            <DialogDescription className="w-screen h-11/12">
                              <iframe
                                src={termsAndConditions}
                                style={{ width: "28vw", height: "80vh" }}
                              ></iframe>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default ProfileBootcampView;
