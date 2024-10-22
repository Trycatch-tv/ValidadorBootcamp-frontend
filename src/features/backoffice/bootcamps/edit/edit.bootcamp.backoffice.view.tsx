import { Button, Input } from "@/components/ui"
import { Textarea } from "@/components/ui/textarea"
import { ShieldCheck } from "lucide-react"
import { ChangeEvent, FC } from "react"

interface Props {
  handleName: (value: string) => void
  handleDescription: (value: string) => void
  handleWebsite: (value: string) => void
  handleFacebook: (value: string) => void
  handleInstagram: (value: string) => void
  handleCountry: (value: string) => void
  handleIsoCountry: (value: string) => void
  handleEmail: (value: string) => void
  handlePhone: (value: string) => void
  handleIsEndorsed: (value: boolean) => void
  handleEndorsedBy: (value: string) => void
  handleIsVerified: (value: boolean) => void
  handleEditBootcamp: () => void
  handleMode: (value: string) => void
  isEndorsed: boolean
  isVerified: boolean
  endorsedBy: string
  name: string
  description: string
  website: string
  facebook: string
  instagram: string
  country: string
  isoCountry: string
  email: string
  phone: string
  mode: string
  enableEndorsedBy: boolean
  onAvatarChange: (file: File) => void
  selectedFile: File | null
}

const EditBootcampBackofficeView: FC<Props> = ({
  handleName,
  handleDescription,
  handleWebsite,
  handleFacebook,
  handleInstagram,
  handleCountry,
  handleIsoCountry,
  handleEmail,
  handlePhone,
  handleIsEndorsed,
  handleEndorsedBy,
  handleIsVerified,
  handleEditBootcamp,
  handleMode,
  isEndorsed,
  isVerified,
  endorsedBy,
  name,
  description,
  website,
  facebook,
  instagram,
  country,
  isoCountry,
  email,
  phone,
  mode,
  enableEndorsedBy,
  onAvatarChange,
  selectedFile,
}) => {
  return (
    <>
      <section>
        <div className="container ">
          <div className="my-2">
            <label className="text-gray-700 text-xs font-semibold block my-1">
              Avatar
            </label>

            <input
              type="file"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                onAvatarChange(e.target.files![0])
              }}
            />
            {selectedFile ? (
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Avatar"
                className="w-96 rounded-md mt-4"
              />
            ) : (
              "Imagen no seleccionada"
            )}
          </div>
          <div className="my-2">
            <label className="text-gray-700 text-xs font-semibold block my-1">
              Nombre
            </label>
            <Input
              type="text"
              placeholder="Nombre del bootcamp"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                handleName(e.target.value)
              }}
              value={name}
              required
            />
          </div>

          <div className="my-2">
            <label className="text-gray-700 text-xs font-semibold block my-1">
              Descripción
            </label>
            <Textarea
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                handleDescription(e.target.value)
              }}
              value={description}
              required
            />
          </div>

          <div className="my-2">
            <label className="text-gray-700 text-xs font-semibold block my-1">
              Sitio Web
            </label>
            <Input
              type="text"
              placeholder="Url del sitio web"
              required
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                handleWebsite(e.target.value)
              }}
              value={website}
            />
          </div>

          <div className="grid md:grid-cols-2 md:gap-4">
            <div className="my-2">
              <label className="text-gray-700 text-xs font-semibold block my-1">
                Facebook
              </label>
              <Input
                type="text"
                placeholder="Url de facebook"
                required
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  handleFacebook(e.target.value)
                }}
                value={facebook}
              />
            </div>
            <div className="my-2">
              <label className="text-gray-700 text-xs font-semibold block my-1">
                Instagram
              </label>
              <Input
                type="text"
                placeholder="Url de instagram"
                required
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  handleInstagram(e.target.value)
                }}
                value={instagram}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-4">
            <div className="my-2">
              <label className="text-gray-700 text-xs font-semibold block my-1">
                País
              </label>
              <Input
                type="text"
                placeholder="Colombia"
                required
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  handleCountry(e.target.value)
                }}
                value={country}
              />
            </div>
            <div className="my-2">
              <label className="text-gray-700 text-xs font-semibold block my-1">
                ISO País
              </label>
              <Input
                type="text"
                placeholder="CO"
                required
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  handleIsoCountry(e.target.value)
                }}
                value={isoCountry}
              />
            </div>
            <div className="my-2">
              <label className="text-gray-700 text-xs font-semibold block my-1">
                Email
              </label>
              <Input
                type="email"
                placeholder="correo@glasscamp.com"
                required
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  handleEmail(e.target.value)
                }}
                value={email}
              />
            </div>
            <div className="my-2">
              <label className="text-gray-700 text-xs font-semibold block my-1">
                Teléfono
              </label>
              <Input
                type="phone"
                placeholder="300 123 4567"
                required
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  handlePhone(e.target.value)
                }}
                value={phone}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-4">
            <div className="my-2">
              <label className="text-gray-700 text-xs font-semibold block my-1">
                Respaldo
              </label>
              <div className="flex items-center">
                <Input
                  className="border-none px-0 size-6 mr-1"
                  type="checkbox"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    handleIsEndorsed(e.target.checked)
                  }}
                  checked={isEndorsed}
                />
                <ShieldCheck className="size-8 text-orange-400 fill-orange-200 ml-0.5" />
                <Input
                  type="text"
                  placeholder="Respaldado por"
                  disabled={enableEndorsedBy}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    handleEndorsedBy(e.target.value)
                  }}
                  value={endorsedBy}
                />
              </div>
            </div>
            <div className="my-2">
              <label className="text-gray-700 text-xs font-semibold block my-1">
                Verificado
              </label>
              <div className="flex items-center">
                <Input
                  className="border-none px-0 size-5 mr-1"
                  type="checkbox"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    handleIsVerified(e.target.checked)
                  }}
                  checked={isVerified}
                />
                <div className="size-12 flex items-center w-full">
                  <ShieldCheck className="text-blue-400 fill-blue-200 ml-0.5" />
                  <span>{name}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:my-5 my-3">
            <label className="text-gray-700 text-xs font-semibold block my-1">
              Modalidad
            </label>
            <select
              className="w-full"
              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                handleMode(e.target.value)
              }}
              value={mode}
            >
              <option value="presencial">Presencial</option>
              <option value="virtual">Virtual</option>
              <option value="hibrida">Híbrida</option>
            </select>
          </div>

          <div className="my-5">
            <Button
              type="button"
              className="w-full"
              disabled={
                !name ||
                !description ||
                !website ||
                !country ||
                !isoCountry ||
                !email ||
                !phone ||
                !mode
              }
              onClick={handleEditBootcamp}
            >
              Actualizar
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default EditBootcampBackofficeView
