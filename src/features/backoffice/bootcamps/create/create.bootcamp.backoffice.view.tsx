import { Button, Input } from "@/components/ui"
import { Textarea } from "@/components/ui/textarea"
import { ShieldCheck } from "lucide-react"

const CreateBootcampBackofficeView = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="my-2">
            <label className="text-gray-700 text-xs font-semibold block my-1">
              Nombre
            </label>
            <Input type="text" placeholder="Nombre del bootcamp" required />
          </div>

          <div className="my-2">
            <label className="text-gray-700 text-xs font-semibold block my-1">
              Descripción
            </label>
            <Textarea required />
          </div>

          <div className="my-2">
            <label className="text-gray-700 text-xs font-semibold block my-1">
              Sitio Web
            </label>
            <Input type="text" placeholder="Url del sitio web" required />
          </div>

          <div className="grid md:grid-cols-2 md:gap-4">
            <div className="my-2">
              <label className="text-gray-700 text-xs font-semibold block my-1">
                Facebook
              </label>
              <Input type="text" placeholder="Url de facebook" required />
            </div>
            <div className="my-2">
              <label className="text-gray-700 text-xs font-semibold block my-1">
                Instagram
              </label>
              <Input type="text" placeholder="Url de instagram" required />
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-4">
            <div className="my-2">
              <label className="text-gray-700 text-xs font-semibold block my-1">
                País
              </label>
              <Input type="text" placeholder="Colombia" required />
            </div>
            <div className="my-2">
              <label className="text-gray-700 text-xs font-semibold block my-1">
                ISO País
              </label>
              <Input type="text" placeholder="CO" required />
            </div>
            <div className="my-2">
              <label className="text-gray-700 text-xs font-semibold block my-1">
                Email
              </label>
              <Input type="email" placeholder="correo@glasscamp.com" required />
            </div>
            <div className="my-2">
              <label className="text-gray-700 text-xs font-semibold block my-1">
                Teléfono
              </label>
              <Input type="phone" placeholder="300 123 4567" required />
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
                />
                <ShieldCheck className="size-8 text-orange-400 fill-orange-200 ml-0.5" />
                <Input type="text" placeholder="Respaldado por" disabled />
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
                />
                <div className="size-12 flex items-center w-full">
                  <ShieldCheck className="text-blue-400 fill-blue-200 ml-0.5" />
                  <span>GlassCamp</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:my-5 my-3">
            <label className="text-gray-700 text-xs font-semibold block my-1">
              Modalidad
            </label>
            <select className="w-full">
              <option value="presencial">Presencial</option>
              <option value="virtual">Virtual</option>
              <option value="hibrida">Híbrida</option>
            </select>
          </div>

          <div className="my-5">
            <Button type="button" className="w-full">
              Crear
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default CreateBootcampBackofficeView
