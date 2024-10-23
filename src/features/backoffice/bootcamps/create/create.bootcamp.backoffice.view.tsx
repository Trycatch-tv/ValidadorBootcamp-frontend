import { Button, Input } from "@/components/ui"
import { Textarea } from "@/components/ui/textarea"
import { ShieldCheck } from "lucide-react"
import { ChangeEvent, FC } from "react"

interface Props {
  handleCreateBootcamp: () => void
  onUpdateForm: (changes: object) => void
  form: any
  onIsEndorsed: (value: boolean) => void
}

const CreateBootcampBackofficeView: FC<Props> = ({
  handleCreateBootcamp,
  onUpdateForm,
  form,
  onIsEndorsed,
}) => {
  return (
    <>
      <section>
        <div className="container ">
          <div className="my-2">
            <label className="text-gray-700 text-xs font-semibold block my-1">
              Nombre
            </label>
            <Input
              type="text"
              placeholder="Nombre del bootcamp"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                onUpdateForm({ name: e.target.value })
              }}
              value={form.name}
              required
            />
          </div>

          <div className="my-2">
            <label className="text-gray-700 text-xs font-semibold block my-1">
              Descripción
            </label>
            <Textarea
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                onUpdateForm({ description: e.target.value })
              }}
              value={form.description}
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
                onUpdateForm({ website: e.target.value })
              }}
              value={form.website}
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
                  onUpdateForm({ facebook: e.target.value })
                }}
                value={form.facebook}
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
                  onUpdateForm({ instagram: e.target.value })
                }}
                value={form.instagram}
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
                  onUpdateForm({ country: e.target.value })
                }}
                value={form.country}
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
                  onUpdateForm({ isoCountry: e.target.value })
                }}
                value={form.isoCountry}
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
                  onUpdateForm({ email: e.target.value })
                }}
                value={form.email}
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
                  onUpdateForm({ phone: e.target.value })
                }}
                value={form.phone}
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
                    onIsEndorsed(e.target.checked)
                  }}
                  checked={form.isEndorsed}
                />
                <ShieldCheck className="size-8 text-orange-400 fill-orange-200 ml-0.5" />
                <Input
                  type="text"
                  placeholder="Respaldado por"
                  disabled={form.enableEndorsedBy}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    onUpdateForm({ endorsedBy: e.target.value })
                  }}
                  value={form.endorsedBy}
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
                    onUpdateForm({ isVerified: e.target.checked })
                  }}
                  checked={form.isVerified}
                />
                <div className="size-12 flex items-center w-full">
                  <ShieldCheck className="text-blue-400 fill-blue-200 ml-0.5" />
                  <span>{form.name}</span>
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
                onUpdateForm({ mode: e.target.value })
              }}
              value={form.mode}
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
                !form.name ||
                !form.description ||
                !form.website ||
                !form.country ||
                !form.isoCountry ||
                !form.email ||
                !form.phone ||
                !form.mode
              }
              onClick={handleCreateBootcamp}
            >
              Crear
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default CreateBootcampBackofficeView
