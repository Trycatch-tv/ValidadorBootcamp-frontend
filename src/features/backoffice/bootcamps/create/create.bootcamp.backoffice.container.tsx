import { BootcampController } from "@/controllers/bootcamp/bootcamp.controller"
import { useAuthStore } from "@/stores/auth/auth.store"
import { useGlobalStore } from "@/stores/global/global.store"
import { showAlert } from "@/utils/alerts/alert.util"
import { useState } from "react"
import CreateBootcampBackofficeView from "./create.bootcamp.backoffice.view"

const CreateBootcampBackofficeContainer = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [website, setWebsite] = useState("")
  const [facebook, setFacebook] = useState("")
  const [instagram, setInstagram] = useState("")
  const [country, setCountry] = useState("")
  const [isoCountry, setIsoCountry] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [isEndorsed, setIsEndorsed] = useState(false)
  const [endorsedBy, setEndorsedBy] = useState("")
  const [isVerified, setIsVerified] = useState(false)
  const [mode, setMode] = useState("")
  const [enableEndorsedBy, setEnableEndorsedBy] = useState(true)

  const { user } = useAuthStore((state) => state)
  const { setModalState } = useGlobalStore((state) => state)

  const createBootcamp = async () => {
    const bootcampController = new BootcampController()

    const newBootcamp = {
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

  return (
    <>
      <CreateBootcampBackofficeView
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
        handleCreateBootcamp={createBootcamp}
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
      />
    </>
  )
}

export default CreateBootcampBackofficeContainer
