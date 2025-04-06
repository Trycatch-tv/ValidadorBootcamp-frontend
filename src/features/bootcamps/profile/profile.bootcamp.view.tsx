// En BootcampProfileView.tsx
import ModalContainer from "@/components/modal/modal.container"
import NavbarContainer from "@/components/navbar/navbar.container"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Avatar,
  AvatarImage,
  Badge,
  Button,
} from "@/components/ui"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { UserType } from "@/enum/users/usertype.enum"
import CreateProgramContainer from "@/features/program/create/create.program.container"
import ListProgramContainer from "@/features/program/list/list.program.container"
import AddReviewContainer from "@/features/review/add/add.review.container"
import CardReviewContainer from "@/features/review/card/card.review.container"
import { BootcampModel } from "@/models/bootcamp.model"
import { ReviewModel } from "@/models/review.model"
import { UserModel } from "@/models/user.model"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip"
import {
  BookmarkIcon,
  Facebook,
  Globe,
  Instagram,
  Link2,
  MessageSquarePlus,
  PlusCircle,
  ShieldCheck,
} from "lucide-react"
import { ChangeEvent, FC } from "react"
import { LazyLoadComponent } from "react-lazy-load-image-component"
import { Link } from "react-router-dom"
import { Rating } from "react-simple-star-rating"

interface PropsInterface {
  bootcamp: BootcampModel
  avatar: string
  reviews: ReviewModel[]
  termsAndConditions: string
  isDialogOpen: boolean
  setDialogOpen: (value: boolean) => void
  controlDialog: (modal: string) => void
  onTermsAndCondsChange: (file: File) => void
  selectedFile: File | undefined
  user: UserModel
  isTermsAndCondsDialogOpen: boolean
  openTermsAndCondsDialog: () => void
  isDialogCreateProgramOpen: boolean
  setIsDialogCreateProgramOpen: (value: boolean) => void
}

const ProfileBootcampView: FC<PropsInterface> = ({
  reviews,
  bootcamp,
  avatar,
  termsAndConditions,
  isDialogOpen,
  setDialogOpen,
  controlDialog,
  onTermsAndCondsChange,
  selectedFile,
  user,
  isTermsAndCondsDialogOpen,
  openTermsAndCondsDialog,
  isDialogCreateProgramOpen,
  setIsDialogCreateProgramOpen,
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
          {bootcamp.score ? (
            <Rating
              initialValue={bootcamp.score}
              size={20}
              readonly={true}
              allowFraction={true}
              fillColor={"#fcc11e"}
              emptyColor={"#e4e4e7"}
              transition
            />
          ) : (
            ""
          )}
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

        <Button onClick={() => controlDialog("add_review")} size="xs">
          <MessageSquarePlus width="16" height="16" />
        </Button>

        <ModalContainer
          isDialogOpen={isDialogOpen}
          setDialogOpen={setDialogOpen}
          title="Agregar Review"
        >
          <AddReviewContainer bootcampId={bootcamp.id} />
        </ModalContainer>

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
              <AccordionTrigger>Programas</AccordionTrigger>
              <AccordionContent>
                {user.role === UserType.ADMIN ? (
                  <PlusCircle
                    className="cursor-pointer"
                    onClick={() => controlDialog("add_program")}
                  />
                ) : (
                  ""
                )}

                <ModalContainer
                  isDialogOpen={isDialogCreateProgramOpen}
                  setDialogOpen={setIsDialogCreateProgramOpen}
                  title="Agregar Programa"
                >
                  <CreateProgramContainer bootcampId={bootcamp.id} />
                </ModalContainer>
                <ListProgramContainer bootcampId={bootcamp.id} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-2">
              <AccordionTrigger>Términos y Condiciones</AccordionTrigger>
              <AccordionContent>
                <div className="w-full">
                  <div className="w-full mt-2">
                    <div className="px-2 py-2.5 flex flex-col items-center justify-center">
                      <Dialog
                        open={isTermsAndCondsDialogOpen}
                        onOpenChange={() => controlDialog("terms_and_conds")}
                      >
                        {bootcamp.terms_and_conditions ? (
                          <Button
                            size="xs"
                            onClick={() => {
                              openTermsAndCondsDialog()
                            }}
                          >
                            <BookmarkIcon
                              width="16"
                              height="16"
                              className="mr-1"
                            />
                            <span className="ml-2">
                              Ver Términos y Condiciones
                            </span>
                          </Button>
                        ) : (
                          <>
                            <div>
                              Aún no se han cargado términos y condiciones
                            </div>
                          </>
                        )}
                        {user.role === UserType.ADMIN ? (
                          <>
                            <input
                              className="mt-2"
                              type="file"
                              accept=".pdf"
                              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                onTermsAndCondsChange(e.target.files![0])
                              }}
                            />
                            {selectedFile ? (
                              <>{selectedFile.name}</>
                            ) : (
                              "PDF no seleccionado"
                            )}
                          </>
                        ) : (
                          ""
                        )}
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
  )
}

export default ProfileBootcampView
