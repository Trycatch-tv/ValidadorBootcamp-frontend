import { BootcampController } from "@/controllers/bootcamp/bootcamp.controller"
import { BootcampModel } from "@/models/bootcamp.model"
import useBootcampStore from "@/stores/bootcamps/bootcamps.store"
import { useGlobalStore } from "@/stores/global/global.store"
import { showAlert } from "@/utils/alerts/alert.util"
import { FC, useState } from "react"
import EditBootcampBackofficeView from "./edit.bootcamp.backoffice.view"

interface Props {
  bootcamp: BootcampModel
}

const EditBootcampBackofficeContainer: FC<Props> = ({ bootcamp }) => {
  const [form, setForm] = useState({
    name: bootcamp.name,
    description: bootcamp.description,
    website: bootcamp.url,
    facebook: bootcamp.facebook_url,
    instagram: bootcamp.instragram_url,
    country: bootcamp.country_name,
    isoCountry: bootcamp.country_iso,
    email: bootcamp.email,
    phone: bootcamp.phone,
    isEndorsed: bootcamp.is_endorsed,
    endorsedBy: bootcamp.endorsed_by,
    isVerified: bootcamp.is_verified,
    avatar: bootcamp.avatar,
    mode: bootcamp.mode,
    enableEndorsedBy: false,
    selectedFile: undefined as File | undefined,
  })

  const { getBootcamps } = useBootcampStore((state) => state)
  const { setModalState } = useGlobalStore((state) => state)

  const handleUpdateForm = (changes: object) => {
    setForm((currentState) => ({ ...currentState, ...changes }))
  }

  const editBootcamp = async () => {
    const bootcampController = new BootcampController()

    const editBootcamp = {
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
    }

    const editBootcampResponse = await bootcampController.updateOne(
      bootcamp.id,
      editBootcamp
    )
    if (editBootcampResponse.id) {
      showAlert(
        "Bootcamp updated successfully",
        "The bootcamp was updated successfully",
        "success"
      )
      getBootcamps()
      setModalState("cerrar_modal")
    } else {
      showAlert(
        "Error updating bootcamp",
        "There was an error updating the bootcamp",
        "error"
      )
    }
  }
  const handleAvatar = async (file: File) => {
    const bootcampController = new BootcampController()
    if (file === null || file === undefined) {
      showAlert(
        "No file selected",
        "You need to select an image to upload",
        "error"
      )
    }

    setForm((currentState) => ({ ...currentState, selectedFile: file }))
    const uploadAvatarResponse = await bootcampController.uploadAvatar(
      bootcamp.id,
      file
    )
    if (uploadAvatarResponse.id) {
      showAlert(
        "Avatar uploaded successfully",
        "The avatar was uploaded successfully",
        "success"
      )
      setForm((currentState) => ({
        ...currentState,
        avatar: uploadAvatarResponse.avatar,
      }))
      getBootcamps()
    }
  }

  return (
    <>
      <EditBootcampBackofficeView
        handleEditBootcamp={editBootcamp}
        onAvatarChange={handleAvatar}
        selectedFile={form.selectedFile}
        onUpdateForm={handleUpdateForm}
        form={form}
      />
    </>
  )
}

export default EditBootcampBackofficeContainer
