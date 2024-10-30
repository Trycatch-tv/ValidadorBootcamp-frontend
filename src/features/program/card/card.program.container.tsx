import { ProgramController } from "@/controllers/program/program.controller"
import { ProgramModel } from "@/models/program.model"
import { useAuthStore } from "@/stores/auth/auth.store"
import useProgramStore from "@/stores/programs/programs.store"
import { showAlert } from "@/utils/alerts/alert.util"
import { FC, useEffect, useState } from "react"
import CardProgramView from "./card.program.view"

interface Props {
  program: ProgramModel
}

const CardProgramContainer: FC<Props> = ({ program }) => {
  const { user } = useAuthStore((state) => state)
  const { getProgramsByBootcamp } = useProgramStore((state) => state)

  const [programContent, setProgramContent] = useState("")
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined)
  const [isProgramContentDialogOpen, setProgramContentDialogOpen] =
    useState(false)

  const programController = new ProgramController()

  const getProgramContent = () => {
    setProgramContent(programController.findOneContent(program.id))
  }

  const openProgramContentDialog = () => {
    setProgramContentDialogOpen(!isProgramContentDialogOpen)
  }

  const handleProgramContent = async (file: File) => {
    const programController = new ProgramController()
    if (file === null || file === undefined) {
      showAlert(
        "No file selected",
        "You need to select a PDF file to upload",
        "error"
      )
    }

    setSelectedFile(file)
    const uploadProgramContentResponse = await programController.uploadContent(
      program.id,
      file
    )
    if (uploadProgramContentResponse.id) {
      showAlert(
        "Program content was uploaded successfully",
        "The program content was uploaded successfully",
        "success"
      )
      await getProgramsByBootcamp(program.bootcamp_id)
      setSelectedFile(undefined)
    }
  }

  const controlDialog = () => {
    return setProgramContentDialogOpen(!isProgramContentDialogOpen)
  }

  useEffect(() => {
    getProgramContent()
  }, [])
  return (
    <>
      <CardProgramView
        program={program}
        programContent={programContent}
        user={user}
        onProgramContentChange={handleProgramContent}
        selectedFile={selectedFile}
        isProgramContentDialogOpen={isProgramContentDialogOpen}
        openProgramContentDialog={openProgramContentDialog}
        controlDialog={controlDialog}
      />
    </>
  )
}

export default CardProgramContainer
