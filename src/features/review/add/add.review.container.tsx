import { ReviewController } from "@/controllers/review/review.controller"
import { showAlert } from "@/utils/alerts/alert.util"
import { FC, useState } from "react"
import { CreateOneReviewDto } from "../../../dtos/review/createOneReview.dto"
import AddBootcampView from "./add.review.view"

interface Props {
  bootcampId: string
  closeDialog: () => void
}

const AddReviewContainer: FC<Props> = ({ bootcampId, closeDialog }) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [scoreOverall, setScoreOverall] = useState(0)
  const [scoreCurriculum, setScoreCurriculum] = useState(0)
  const [scoreJobSupport, setScoreJobSupport] = useState(0)

  const userId = localStorage.getItem("userid") as string
  const reviewController = new ReviewController()

  const handlerTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handlerDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value)
  }

  const handlerScoreOverall = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScoreOverall(Number(e.target.value))
  }

  const handlerScoreCurriculum = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScoreCurriculum(Number(e.target.value))
  }

  const handlerScoreJobSupport = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScoreJobSupport(Number(e.target.value))
  }

  const handlerSubmit = async () => {
    const createOneReviewDto = {
      bootcamp_id: bootcampId,
      user_id: userId,
      title,
      description,
      score_overall: scoreOverall,
      score_curriculum: scoreCurriculum,
      score_job_support: scoreJobSupport,
    } satisfies CreateOneReviewDto

    const response = await reviewController.createOne(createOneReviewDto)

    if (response) {
      showAlert("Reseña", "Reseña creada", "success")
      closeDialog()
    } else {
      showAlert("Error", "Error creando reseña", "error")
    }
  }

  return (
    <>
      <AddBootcampView
        title={title}
        onChangeTitle={handlerTitle}
        description={description}
        onChangeDescription={handlerDescription}
        scoreOverall={scoreOverall}
        onChangeScoreOverall={handlerScoreOverall}
        scoreCurriculum={scoreCurriculum}
        onChangeScoreCurriculum={handlerScoreCurriculum}
        scoreJobSupport={scoreJobSupport}
        onChangeScoreJobSupport={handlerScoreJobSupport}
        onSubmit={handlerSubmit}
      />
    </>
  )
}

export default AddReviewContainer
