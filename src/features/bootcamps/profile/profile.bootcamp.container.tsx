import { BootcampController } from "@/controllers/bootcamp/bootcamp.controller"
import { ReviewController } from "@/controllers/review/review.controller"
import { BootcampModel } from "@/models/bootcamp.model"
import { ReviewModel } from "@/models/review.model"
import { useAuthStore } from "@/stores/auth/auth.store"
import { showAlert } from "@/utils/alerts/alert.util"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProfileBootcampView from "./profile.bootcamp.view"

const ProfileBootcampContainer = () => {
  const { id } = useParams<{ id: string }>() as { id: string }
  const bootcampController = new BootcampController()
  const reviewController = new ReviewController()

  const { user } = useAuthStore((state) => state)

  const [bootcamp, setBootcamp] = useState<BootcampModel>(
    new Object() as BootcampModel
  )
  const [reviews, setComments] = useState<ReviewModel[]>(
    new Object() as ReviewModel[]
  )

  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined)

  const [isDialogOpen, setDialogOpen] = useState(false)
  const [isDialogCreateProgramOpen, setIsDialogCreateProgramOpen] =
    useState(false)
  const [isTermsAndCondsDialogOpen, setTermsAndCondsDialogOpen] =
    useState(false)

  const controlDialog = (modal: string) => {
    switch (modal) {
      case "add_review":
        setDialogOpen(!isDialogOpen)
        break
      case "add_program":
        setIsDialogCreateProgramOpen(!isDialogCreateProgramOpen)
        break
      case "terms_and_conds":
        setTermsAndCondsDialogOpen(!isTermsAndCondsDialogOpen)
        break
      default:
        break
    }
  }

  const openTermsAndCondsDialog = () => {
    setTermsAndCondsDialogOpen(!isTermsAndCondsDialogOpen)
  }

  const [termsAndConditions, setTermsAndConditions] = useState<string>("")

  const getBootcampAvatar = bootcampController.findOneAvatar(id)
  const getBootcamp = async () => {
    const bootcamp = await bootcampController.findOne(id)
    setBootcamp(bootcamp)
  }

  const getReviews = async () => {
    const reviews = await reviewController.findAllByBootcampId(id)
    setComments(reviews)
  }

  const getTermsAndConditions = () => {
    setTermsAndConditions(bootcampController.findOneTermsAndConditions(id))
  }

  const handleTermsAndConds = async (file: File) => {
    const bootcampController = new BootcampController()
    if (file === null || file === undefined) {
      showAlert(
        "No file selected",
        "You need to select a PDF file to upload",
        "error"
      )
    }

    setSelectedFile(file)
    const uploadTermsAndCondsResponse =
      await bootcampController.uploadTermsAndConditions(bootcamp.id, file)
    if (uploadTermsAndCondsResponse.id) {
      showAlert(
        "Terms and Conditions uploaded successfully",
        "The terms and conditions were uploaded successfully",
        "success"
      )
      await getBootcamp()
      setSelectedFile(undefined)
    }
  }

  useEffect(() => {
    getBootcamp()
    getReviews()
    getTermsAndConditions()
  }, [id])

  useEffect(() => {
    if (isDialogOpen === false) {
      getReviews()
    }
  }, [isDialogOpen])

  return (
    <>
      <ProfileBootcampView
        reviews={reviews}
        bootcamp={bootcamp}
        avatar={getBootcampAvatar}
        termsAndConditions={termsAndConditions}
        isDialogOpen={isDialogOpen}
        setDialogOpen={setDialogOpen}
        controlDialog={controlDialog}
        onTermsAndCondsChange={handleTermsAndConds}
        selectedFile={selectedFile}
        user={user}
        isTermsAndCondsDialogOpen={isTermsAndCondsDialogOpen}
        openTermsAndCondsDialog={openTermsAndCondsDialog}
        isDialogCreateProgramOpen={isDialogCreateProgramOpen}
        setIsDialogCreateProgramOpen={setIsDialogCreateProgramOpen}
      />
    </>
  )
}

export default ProfileBootcampContainer
