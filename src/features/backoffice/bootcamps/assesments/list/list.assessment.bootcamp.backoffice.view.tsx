import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  CriteriaInterface,
  ScoreCriteriaInterface,
} from "@/interfaces/assessments/criteria.interface"

import { Info } from "lucide-react"
import { ChangeEvent, FC } from "react"

interface Props {
  resultadosVerificados: CriteriaInterface[]
  experienciaFormativa: CriteriaInterface[]
  confianza: CriteriaInterface[]
  viewMode: string
  onChangeResultadosVerificados: (
    value: React.ChangeEvent<HTMLSelectElement>,
    criteria_id: string
  ) => void
  onChangeExperienciaFormativa: (
    value: React.ChangeEvent<HTMLSelectElement>,
    criteria_id: string
  ) => void
  onChangeConfianza: (
    value: React.ChangeEvent<HTMLSelectElement>,
    criteria_id: string
  ) => void
  onSubmit: () => void
}
const ListAssessmentBootcampBackofficeView: FC<Props> = ({
  resultadosVerificados,
  experienciaFormativa,
  confianza,
  viewMode,
  onChangeResultadosVerificados,
  onChangeExperienciaFormativa,
  onChangeConfianza,
  onSubmit,
}) => {
  return (
    <>
      <div className="grid gap-4 py-4">
        <div>
          <div>
            <span className="text-sm font-bold">Resultados Verificados</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            {resultadosVerificados.map(
              (item: CriteriaInterface, index: number) => (
                <div key={index}>
                  <Label
                    htmlFor={`score_${item.code}`}
                    className="text-right flex flex-row justify-start items-center "
                  >
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info size={16} className="mr-2" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <div className="bg-gray-950 p-2 rounded-md ml-7 mb-0.5">
                            <p className="text-xs text-muted-foreground text-white">
                              {item.criteriaDescription}
                            </p>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <span>{item.code}</span>
                  </Label>
                  <select
                    key={index}
                    id={`score_${item.code}`}
                    className="col-span-3"
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                      onChangeResultadosVerificados(e, item.code)
                    }}
                    value={resultadosVerificados[index].weight}
                  >
                    {item.score.map(
                      (score: ScoreCriteriaInterface, index: number) => (
                        <option key={index} value={index}>
                          {score.scoreDescription}
                        </option>
                      )
                    )}
                  </select>
                </div>
              )
            )}
          </div>
        </div>

        <div>
          <div>
            <span className="text-sm font-bold">Experiencia Formativa</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            {experienciaFormativa.map(
              (item: CriteriaInterface, index: number) => (
                <div key={index}>
                  <Label
                    htmlFor={`score_${item.code}`}
                    className="text-right flex flex-row justify-start items-center "
                  >
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info size={16} className="mr-2" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <div className="bg-gray-950 p-2 rounded-md ml-7 mb-0.5">
                            <p className="text-xs text-muted-foreground text-white">
                              {item.criteriaDescription}
                            </p>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <span>{item.code}</span>
                  </Label>
                  <select
                    key={index}
                    id={`score_${item.code}`}
                    className="col-span-3"
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                      onChangeExperienciaFormativa(e, item.code)
                    }}
                    value={experienciaFormativa[index].weight}
                  >
                    {item.score.map(
                      (score: ScoreCriteriaInterface, index: number) => (
                        <option key={index} value={index}>
                          {score.scoreDescription}
                        </option>
                      )
                    )}
                  </select>
                </div>
              )
            )}
          </div>
        </div>

        <div>
          <div>
            <span className="text-sm font-bold">Confianza</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            {confianza.map((item: CriteriaInterface, index: number) => (
              <div key={index}>
                <Label
                  htmlFor={`score_${item.code}`}
                  className="text-right flex flex-row justify-start items-center "
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info size={16} className="mr-2" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <div className="bg-gray-950 p-2 rounded-md ml-7 mb-0.5">
                          <p className="text-xs text-muted-foreground text-white">
                            {item.criteriaDescription}
                          </p>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <span>{item.code}</span>
                </Label>
                <select
                  key={index}
                  id={`score_${item.code}`}
                  className="col-span-3"
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                    onChangeConfianza(e, item.code)
                  }}
                  value={confianza[index].weight}
                >
                  {item.score.map(
                    (score: ScoreCriteriaInterface, index: number) => (
                      <option key={index} value={index}>
                        {score.scoreDescription}
                      </option>
                    )
                  )}
                </select>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="items-center justify-center flex ">
        <Button onClick={onSubmit} size="lg">
          {viewMode === "create" ? "Crear" : "Actualizar"}
        </Button>
      </div>
    </>
  )
}

export default ListAssessmentBootcampBackofficeView
