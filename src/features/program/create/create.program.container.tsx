import { ProgramController } from "@/controllers/program/program.controller"
import { TypeModeProgram } from "@/enum/program/typemodeprogram.enum"
import { useAuthStore } from "@/stores/auth/auth.store"
import { useGlobalStore } from "@/stores/global/global.store"
import useProgramStore from "@/stores/programs/programs.store"
import { showAlert } from "@/utils/alerts/alert.util"
import { FC, useState } from "react"
import CreateProgramView from "./create.program.view"

interface Props {
  bootcampId: string
}

const CreateProgramContainer: FC<Props> = ({ bootcampId }) => {
  const { getProgramsByBootcamp } = useProgramStore((state) => state)

  const [form, setForm] = useState({
    name: "",
    mode: TypeModeProgram.VIRTUAL,
    duration: 0,
  })

  const handleUpdateForm = (changes: object) => {
    setForm((currentState) => ({ ...currentState, ...changes }))
  }

  const { user } = useAuthStore((state) => state)
  const { setModalState } = useGlobalStore((state) => state)

  const createProgram = async () => {
    const programController = new ProgramController()

    const newProgram = {
      name: form.name,
      mode: form.mode,
      duration: form.duration,
      bootcamp_id: bootcampId,
      user_id: user.id,
    }

    const newProgramResponse = await programController.createOne(newProgram)
    if (newProgramResponse.id) {
      showAlert(
        "Program created successfully",
        "The program was created successfully",
        "success"
      )
      await getProgramsByBootcamp(bootcampId)
      setModalState("cerrar_modal")
    } else {
      showAlert(
        "Error creating the program",
        "There was an error creating the program",
        "error"
      )
    }
  }

  return (
    <>
      <CreateProgramView
        handleCreateProgram={createProgram}
        onUpdateForm={handleUpdateForm}
        form={form}
      />
    </>
  )
}

export default CreateProgramContainer
