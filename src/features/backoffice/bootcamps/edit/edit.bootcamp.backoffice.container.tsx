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
  const [name, setName] = useState(bootcamp?.name)
  const [description, setDescription] = useState(bootcamp?.description)
  const [website, setWebsite] = useState(bootcamp?.url)
  const [facebook, setFacebook] = useState(bootcamp?.facebook_url)
  const [instagram, setInstagram] = useState(bootcamp?.instragram_url)
  const [country, setCountry] = useState(bootcamp?.country_name)
  const [isoCountry, setIsoCountry] = useState(bootcamp?.country_iso)
  const [email, setEmail] = useState(bootcamp?.email)
  const [phone, setPhone] = useState(bootcamp?.phone)
  const [isEndorsed, setIsEndorsed] = useState(bootcamp?.is_endorsed)
  const [endorsedBy, setEndorsedBy] = useState(bootcamp?.endorsed_by)
  const [isVerified, setIsVerified] = useState(bootcamp?.is_verified)
  const [avatar, setAvatar] = useState(bootcamp?.avatar)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [mode, setMode] = useState(bootcamp?.mode)
  const [enableEndorsedBy, setEnableEndorsedBy] = useState(false)

  const { getBootcamps } = useBootcampStore((state) => state)
  const { setModalState } = useGlobalStore((state) => state)

  const editBootcamp = async () => {
    const bootcampController = new BootcampController()

    const editBootcamp = {
      name,
      description,
      url: website,
      facebook_url: facebook,
      instragram_url: instagram,
      country_name: country,
      country_iso: isoCountry,
      email,
      phone,
      is_endorsed: isEndorsed,
      endorsed_by: endorsedBy,
      is_verified: isVerified,
      mode,
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

  // ----

  // const [objeto, setObjeto] = useState({ firstName: "", lastName: "" })
  // const handleUpdateObjeto = (changes) => {
  //   setObjeto((currentState) => ({ ...currentState, ...changes }))
  // }

  // ;<input onChange={(e) => handleUpdateObjeto({ firstName: e.target.value })} />

  // ----

  const handleName = (value: string) => {
    setName(value)
  }

  const handleDescription = (value: string) => {
    setDescription(value)
  }

  const handleWebsite = (value: string) => {
    setWebsite(value)
  }

  const handleFacebook = (value: string) => {
    setFacebook(value)
  }

  const handleInstagram = (value: string) => {
    setInstagram(value)
  }

  const handleCountry = (value: string) => {
    setCountry(value)
  }

  const handleIsoCountry = (value: string) => {
    setIsoCountry(value)
  }

  const handleEmail = (value: string) => {
    setEmail(value)
  }

  const handlePhone = (value: string) => {
    setPhone(value)
  }

  const handleIsEndorsed = (value: boolean) => {
    setIsEndorsed(value)

    if (value) {
      setEnableEndorsedBy(false)
    } else {
      setEnableEndorsedBy(true)
      setEndorsedBy("")
    }
  }

  const handleEndorsedBy = (value: string) => {
    setEndorsedBy(value)
  }

  const handleIsVerified = (value: boolean) => {
    setIsVerified(value)
  }

  const handleMode = (value: string) => {
    setMode(value)
  }

  const handleAvatar = async (file: File) => {
    const bootcampController = new BootcampController()
    if (file === null) {
      alert("No file selected")
    }
    setSelectedFile(file)
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
      setAvatar(uploadAvatarResponse.avatar)
      getBootcamps()
    }
  }

  return (
    <>
      <EditBootcampBackofficeView
        handleName={handleName}
        handleDescription={handleDescription}
        handleWebsite={handleWebsite}
        handleFacebook={handleFacebook}
        handleInstagram={handleInstagram}
        handleCountry={handleCountry}
        handleIsoCountry={handleIsoCountry}
        handleEmail={handleEmail}
        handlePhone={handlePhone}
        handleIsEndorsed={handleIsEndorsed}
        handleEndorsedBy={handleEndorsedBy}
        handleIsVerified={handleIsVerified}
        handleEditBootcamp={editBootcamp}
        handleMode={handleMode}
        isEndorsed={isEndorsed}
        isVerified={isVerified}
        endorsedBy={endorsedBy}
        name={name}
        description={description}
        website={website}
        facebook={facebook}
        instagram={instagram}
        country={country}
        isoCountry={isoCountry}
        email={email}
        phone={phone}
        mode={mode}
        enableEndorsedBy={enableEndorsedBy}
        onAvatarChange={handleAvatar}
        selectedFile={selectedFile}
      />
    </>
  )
}

export default EditBootcampBackofficeContainer
