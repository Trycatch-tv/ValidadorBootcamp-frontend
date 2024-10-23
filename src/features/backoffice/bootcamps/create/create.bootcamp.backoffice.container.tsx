import { BootcampController } from "@/controllers/bootcamp/bootcamp.controller"
import { useAuthStore } from "@/stores/auth/auth.store"
import { useGlobalStore } from "@/stores/global/global.store"
import { showAlert } from "@/utils/alerts/alert.util"
import { useState } from "react"
import CreateBootcampBackofficeView from "./create.bootcamp.backoffice.view"

const CreateBootcampBackofficeContainer = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    website: "",
    facebook: "",
    instagram: "",
    country: "",
    isoCountry: "",
    email: "",
    phone: "",
    isEndorsed: false,
    endorsedBy: "",
    isVerified: false,
    avatar: "",
    mode: "",
    enableEndorsedBy: false,
  })

  const handleUpdateForm = (changes: object) => {
    setForm((currentState) => ({ ...currentState, ...changes }))
  }

  const { user } = useAuthStore((state) => state)
  const { setModalState } = useGlobalStore((state) => state)

  const createBootcamp = async () => {
    const bootcampController = new BootcampController()

    const newBootcamp = {
      name: form.name,
      description: form.description,
      url: form.website,
      facebook_url: form.facebook,
      instragram_url: form.instagram,
      country_name: form.country,
      country_iso: form.isoCountry,
      email: form.email,
      phone: form.phone,
      is_endorsed: form.isEndorsed,
      endorsed_by: form.endorsedBy,
      is_verified: form.isVerified,
      mode: form.mode,
      user_id: user.id,
    }

    const newBootcampResponse = await bootcampController.createOne(newBootcamp)
    if (newBootcampResponse.id) {
      showAlert(
        "Bootcamp created successfully",
        "The bootcamp was created successfully",
        "success"
      )
      setModalState("cerrar_modal")
    } else {
      showAlert(
        "Error creating bootcamp",
        "There was an error creating the bootcamp",
        "error"
      )
    }
  }

  const handleIsEndorsed = (value: boolean) => {
    handleUpdateForm({ isEndorsed: value })
    if (value) {
      handleUpdateForm({ enableEndorsedBy: false })
    } else {
      handleUpdateForm({ enableEndorsedBy: true })
      handleUpdateForm({ endorsedBy: "" })
    }
  }

  return (
    <>
      <CreateBootcampBackofficeView
        handleCreateBootcamp={createBootcamp}
        onUpdateForm={handleUpdateForm}
        onIsEndorsed={handleIsEndorsed}
        form={form}
      />
    </>
  )
}

export default CreateBootcampBackofficeContainer
