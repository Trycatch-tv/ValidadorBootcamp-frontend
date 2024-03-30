import { Button, Input } from "@/components/ui"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Info } from "lucide-react"
import { FC } from "react"

interface Props {
  title: string
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void
  description: string
  onChangeDescription: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  scoreOverall: number
  onChangeScoreOverall: (e: React.ChangeEvent<HTMLInputElement>) => void
  scoreCurriculum: number
  onChangeScoreCurriculum: (e: React.ChangeEvent<HTMLInputElement>) => void
  scoreJobSupport: number
  onChangeScoreJobSupport: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: () => void
}

const AddReviewView: FC<Props> = ({
  title,
  onChangeTitle,
  description,
  onChangeDescription,
  scoreOverall,
  onChangeScoreOverall,
  scoreCurriculum,
  onChangeScoreCurriculum,
  scoreJobSupport,
  onChangeScoreJobSupport,
  onSubmit,
}) => {
  return (
    <>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="title" className="text-right">
            Título
          </Label>
          <Input
            id="title"
            className="col-span-3"
            onChange={onChangeTitle}
            value={title}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="description" className="text-right">
            Descripción
          </Label>
          <Textarea
            id="description"
            className="col-span-3"
            onChange={onChangeDescription}
            value={description}
          />
        </div>
        <div>
          <span className="font-bold">Puntaje</span>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label
            htmlFor="score_overall"
            className="text-right flex flex-row justify-start items-center "
          >
            <Info size={16} className="mr-2" />
            <span>General </span>
          </Label>
          <Input
            id="score_overall"
            className="col-span-3"
            type="number"
            min="0"
            max="5"
            step="0.1"
            onChange={onChangeScoreOverall}
            value={scoreOverall}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label
            htmlFor="score_curriculum"
            className="text-right flex flex-row justify-start items-center "
          >
            <Info size={16} className="mr-2" />
            <span>Curriculum </span>
          </Label>
          <Input
            id="score_curriculum"
            className="col-span-3"
            type="number"
            min="0"
            max="5"
            step="0.1"
            onChange={onChangeScoreCurriculum}
            value={scoreCurriculum}
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label
            htmlFor="score_job_support"
            className="text-right flex flex-row justify-start items-center "
          >
            <Info size={16} className="mr-2" />
            <span>Trabajo </span>
          </Label>
          <Input
            id="score_job_support"
            className="col-span-3"
            type="number"
            min="0"
            max="5"
            step="0.1"
            onChange={onChangeScoreJobSupport}
            value={scoreJobSupport}
          />
        </div>
      </div>
      <div className="items-center justify-center flex ">
        <Button
          onClick={onSubmit}
          size="lg"
          disabled={
            !title ||
            !description ||
            !scoreOverall ||
            !scoreCurriculum ||
            !scoreJobSupport
          }
        >
          Crear
        </Button>
      </div>
    </>
  )
}

export default AddReviewView
