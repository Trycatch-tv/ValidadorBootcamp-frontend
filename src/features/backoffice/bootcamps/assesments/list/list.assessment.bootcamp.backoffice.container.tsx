import { AssessmentController } from "@/controllers/assessment/assessment.controller"
import { CriteriaInterface } from "@/interfaces/assessments/criteria.interface"
import { AssessmentModel } from "@/models/assessment.model"
import { BootcampModel } from "@/models/bootcamp.model"
import { showAlert } from "@/utils/alerts/alert.util"
import { FC, useEffect, useState } from "react"
import ListAssessmentBootcampBackofficeView from "./list.assessment.bootcamp.backoffice.view"

interface Props {
  bootcamp: BootcampModel
}

const ListAssessmentBootcampBackofficeContainer: FC<Props> = ({ bootcamp }) => {
  const resultadosVerificadosRaw: CriteriaInterface[] = [
    {
      code: "RV01",
      criteriaDescription:
        "Tasa de éxito: (total ubicados / total cupos ofertados)*100",
      weight: 0.0,
      category_id: 1,
      bootcamp_id: bootcamp.id,
      score: [
        {
          score: 0.0,
          scoreDescription: "N/R (no responde)",
        },
        {
          score: 1.0,
          scoreDescription: "5%",
        },
        {
          score: 2.0,
          scoreDescription: "15%",
        },
        {
          score: 3.0,
          scoreDescription: "25%",
        },
        {
          score: 4.0,
          scoreDescription: "50%",
        },
        {
          score: 5.0,
          scoreDescription: "100%",
        },
      ],
    },
    {
      code: "RV02",
      criteriaDescription:
        "Velocidad de inserción: meses promedio en conseguir trabajo luego de terminar",
      weight: 0.0,
      category_id: 1,
      bootcamp_id: bootcamp.id,
      score: [
        {
          score: 0.0,
          scoreDescription: "N/R",
        },
        {
          score: 1.0,
          scoreDescription: "+12 meses",
        },
        {
          score: 2.0,
          scoreDescription: "+9 meses",
        },
        {
          score: 3.0,
          scoreDescription: "+6 meses",
        },
        {
          score: 4.0,
          scoreDescription: "+3 meses",
        },
        {
          score: 5.0,
          scoreDescription: "<3 meses",
        },
      ],
    },
    {
      code: "RV03",
      criteriaDescription:
        "Salario promedio de entrada: primer salario promedio al engancharse",
      weight: 0.0,
      category_id: 1,
      bootcamp_id: bootcamp.id,
      score: [
        {
          score: 0.0,
          scoreDescription: "N/R",
        },
        {
          score: 1.0,
          scoreDescription: "Salario mínimo",
        },
        {
          score: 2.0,
          scoreDescription: "x1.5",
        },
        {
          score: 3.0,
          scoreDescription: "x2",
        },
        {
          score: 4.0,
          scoreDescription: "x3",
        },
        {
          score: 5.0,
          scoreDescription: "x4 o más",
        },
      ],
    },
    {
      code: "RV04",
      criteriaDescription:
        "Rol de entrada conseguido: primer rol con el que se engancha el egresado",
      weight: 0.0,
      category_id: 1,
      bootcamp_id: bootcamp.id,
      score: [
        {
          score: 0.0,
          scoreDescription: "N/R",
        },
        {
          score: 1.0,
          scoreDescription: "Trainee",
        },
        {
          score: 2.0,
          scoreDescription: "Analista nivel 1",
        },
        {
          score: 3.0,
          scoreDescription: "Analista nivel 2",
        },
        {
          score: 4.0,
          scoreDescription: "Junior",
        },
        {
          score: 5.0,
          scoreDescription: "Especialista",
        },
      ],
    },
  ]

  const experienciaFormativaRaw: CriteriaInterface[] = [
    {
      code: "EF01",
      criteriaDescription:
        "Costo vs Retorno: inversión requerida vs retribución",
      weight: 0.0,
      category_id: 2,
      bootcamp_id: bootcamp.id,
      score: [
        {
          score: 0.0,
          scoreDescription: "N/R",
        },
        {
          score: 1.0,
          scoreDescription: "Muy alta",
        },
        {
          score: 2.0,
          scoreDescription: "Alta",
        },
        {
          score: 3.0,
          scoreDescription: "Aceptable",
        },
        {
          score: 4.0,
          scoreDescription: "Baja",
        },
        {
          score: 5.0,
          scoreDescription: "Gratuito",
        },
      ],
    },
    {
      code: "EF02",
      criteriaDescription: "Antes: Requisitos de ingreso",
      weight: 0.0,
      category_id: 2,
      bootcamp_id: bootcamp.id,
      score: [
        {
          score: 0.0,
          scoreDescription: "N/R",
        },
        {
          score: 1.0,
          scoreDescription: "Muy altos",
        },
        {
          score: 2.0,
          scoreDescription: "Alta",
        },
        {
          score: 3.0,
          scoreDescription: "Aceptable",
        },
        {
          score: 4.0,
          scoreDescription: "Pocos",
        },
        {
          score: 5.0,
          scoreDescription: "Sin restricción",
        },
      ],
    },
    {
      code: "EF03",
      criteriaDescription: "Antes: Proceso de admisión",
      weight: 0.0,
      category_id: 2,
      bootcamp_id: bootcamp.id,
      score: [
        {
          score: 0.0,
          scoreDescription: "N/R",
        },
        {
          score: 1.0,
          scoreDescription: "No explícito",
        },
        {
          score: 2.0,
          scoreDescription: "Poco claro",
        },
        {
          score: 3.0,
          scoreDescription: "Aceptable",
        },
        {
          score: 4.0,
          scoreDescription: "Bueno",
        },
        {
          score: 5.0,
          scoreDescription: "Excelente",
        },
      ],
    },
    {
      code: "EF04",
      criteriaDescription: "Durante: Calidad y actualidad de Contenidos",
      weight: 0.0,
      category_id: 2,
      bootcamp_id: bootcamp.id,
      score: [
        {
          score: 0.0,
          scoreDescription: "N/R",
        },
        {
          score: 1.0,
          scoreDescription: "Insuficiente",
        },
        {
          score: 2.0,
          scoreDescription: "Mínimo",
        },
        {
          score: 3.0,
          scoreDescription: "Aceptable",
        },
        {
          score: 4.0,
          scoreDescription: "Bueno",
        },
        {
          score: 5.0,
          scoreDescription: "Excelente",
        },
      ],
    },
    {
      code: "EF05",
      criteriaDescription: "Durante: Enfoque práctico",
      weight: 0.0,
      category_id: 2,
      bootcamp_id: bootcamp.id,
      score: [
        {
          score: 0.0,
          scoreDescription: "N/R",
        },
        {
          score: 1.0,
          scoreDescription: "Insuficiente",
        },
        {
          score: 2.0,
          scoreDescription: "Mínimo",
        },
        {
          score: 3.0,
          scoreDescription: "Aceptable",
        },
        {
          score: 4.0,
          scoreDescription: "Bueno",
        },
        {
          score: 5.0,
          scoreDescription: "Excelente",
        },
      ],
    },
    {
      code: "EF06",
      criteriaDescription: "Durante: Calidad de Docentes",
      weight: 0.0,
      category_id: 2,
      bootcamp_id: bootcamp.id,
      score: [
        {
          score: 0.0,
          scoreDescription: "N/R",
        },
        {
          score: 1.0,
          scoreDescription: "Insuficiente",
        },
        {
          score: 2.0,
          scoreDescription: "Mínimo",
        },
        {
          score: 3.0,
          scoreDescription: "Aceptable",
        },
        {
          score: 4.0,
          scoreDescription: "Bueno",
        },
        {
          score: 5.0,
          scoreDescription: "Excelente",
        },
      ],
    },
    {
      code: "EF07",
      criteriaDescription: "Durante: Mentoría",
      weight: 0.0,
      category_id: 2,
      bootcamp_id: bootcamp.id,
      score: [
        {
          score: 0.0,
          scoreDescription: "N/R",
        },
        {
          score: 1.0,
          scoreDescription: "Insuficiente",
        },
        {
          score: 2.0,
          scoreDescription: "Mínimo",
        },
        {
          score: 3.0,
          scoreDescription: "Aceptable",
        },
        {
          score: 4.0,
          scoreDescription: "Bueno",
        },
        {
          score: 5.0,
          scoreDescription: "Excelente",
        },
      ],
    },
    {
      code: "EF08",
      criteriaDescription: "Durante: Networking",
      weight: 0.0,
      category_id: 2,
      bootcamp_id: bootcamp.id,
      score: [
        {
          score: 0.0,
          scoreDescription: "N/R",
        },
        {
          score: 1.0,
          scoreDescription: "Insuficiente",
        },
        {
          score: 2.0,
          scoreDescription: "Mínimo",
        },
        {
          score: 3.0,
          scoreDescription: "Aceptable",
        },
        {
          score: 4.0,
          scoreDescription: "Bueno",
        },
        {
          score: 5.0,
          scoreDescription: "Excelente",
        },
      ],
    },
    {
      code: "EF09",
      criteriaDescription: "Después: Talleres de inserción laboral",
      weight: 0.0,
      category_id: 2,
      bootcamp_id: bootcamp.id,
      score: [
        {
          score: 0.0,
          scoreDescription: "N/R",
        },
        {
          score: 1.0,
          scoreDescription: "Insuficiente",
        },
        {
          score: 2.0,
          scoreDescription: "Mínimo",
        },
        {
          score: 3.0,
          scoreDescription: "Aceptable",
        },
        {
          score: 4.0,
          scoreDescription: "Bueno",
        },
        {
          score: 5.0,
          scoreDescription: "Excelente",
        },
      ],
    },
    {
      code: "EF10",
      criteriaDescription: "Después: Contacto con empresas",
      weight: 0.0,
      category_id: 2,
      bootcamp_id: bootcamp.id,
      score: [
        {
          score: 0.0,
          scoreDescription: "N/R",
        },
        {
          score: 1.0,
          scoreDescription: "Insuficiente",
        },
        {
          score: 2.0,
          scoreDescription: "Mínimo",
        },
        {
          score: 3.0,
          scoreDescription: "Aceptable",
        },
        {
          score: 4.0,
          scoreDescription: "Bueno",
        },
        {
          score: 5.0,
          scoreDescription: "Excelente",
        },
      ],
    },
  ]

  const confianzaRaw: CriteriaInterface[] = [
    {
      code: "CF01",
      criteriaDescription: "Transparencia: Términos y condiciones",
      weight: 0.0,
      category_id: 3,
      bootcamp_id: bootcamp.id,
      score: [
        {
          score: 0.0,
          scoreDescription: "N/R",
        },
        {
          score: 1.0,
          scoreDescription: "Insuficiente",
        },
        {
          score: 2.0,
          scoreDescription: "Mínimo",
        },
        {
          score: 3.0,
          scoreDescription: "Aceptable",
        },
        {
          score: 4.0,
          scoreDescription: "Bueno",
        },
        {
          score: 5.0,
          scoreDescription: "Excelente",
        },
      ],
    },
    {
      code: "CF02",
      criteriaDescription: "Transparencia: Requisitos de admisión",
      weight: 0.0,
      category_id: 3,
      bootcamp_id: bootcamp.id,
      score: [
        {
          score: 0.0,
          scoreDescription: "N/R",
        },
        {
          score: 1.0,
          scoreDescription: "Insuficiente",
        },
        {
          score: 2.0,
          scoreDescription: "Mínimo",
        },
        {
          score: 3.0,
          scoreDescription: "Aceptable",
        },
        {
          score: 4.0,
          scoreDescription: "Bueno",
        },
        {
          score: 5.0,
          scoreDescription: "Excelente",
        },
      ],
    },
    {
      code: "CF03",
      criteriaDescription: "Transparencia: Condiciones de salida",
      weight: 0.0,
      category_id: 3,
      bootcamp_id: bootcamp.id,
      score: [
        {
          score: 0.0,
          scoreDescription: "N/R",
        },
        {
          score: 1.0,
          scoreDescription: "Insuficiente",
        },
        {
          score: 2.0,
          scoreDescription: "Mínimo",
        },
        {
          score: 3.0,
          scoreDescription: "Aceptable",
        },
        {
          score: 4.0,
          scoreDescription: "Bueno",
        },
        {
          score: 5.0,
          scoreDescription: "Excelente",
        },
      ],
    },
    {
      code: "CF04",
      criteriaDescription: "Transparencia: Canales de contacto",
      weight: 0.0,
      category_id: 3,
      bootcamp_id: bootcamp.id,
      score: [
        {
          score: 0.0,
          scoreDescription: "N/R",
        },
        {
          score: 1.0,
          scoreDescription: "Insuficiente",
        },
        {
          score: 2.0,
          scoreDescription: "Mínimo",
        },
        {
          score: 3.0,
          scoreDescription: "Aceptable",
        },
        {
          score: 4.0,
          scoreDescription: "Bueno",
        },
        {
          score: 5.0,
          scoreDescription: "Excelente",
        },
      ],
    },
    {
      code: "CF05",
      criteriaDescription: "Soporte: Sponsors, instituciones aliadas",
      weight: 0.0,
      category_id: 3,
      bootcamp_id: bootcamp.id,
      score: [
        {
          score: 0.0,
          scoreDescription: "N/R",
        },
        {
          score: 1.0,
          scoreDescription: "Insuficiente",
        },
        {
          score: 2.0,
          scoreDescription: "Mínimo",
        },
        {
          score: 3.0,
          scoreDescription: "Aceptable",
        },
        {
          score: 4.0,
          scoreDescription: "Bueno",
        },
        {
          score: 5.0,
          scoreDescription: "Excelente",
        },
      ],
    },
    {
      code: "CF06",
      criteriaDescription: "Demanda Externa: Perfiles requeridos",
      weight: 0.0,
      category_id: 3,
      bootcamp_id: bootcamp.id,
      score: [
        {
          score: 0.0,
          scoreDescription: "N/R",
        },
        {
          score: 1.0,
          scoreDescription: "Insuficiente",
        },
        {
          score: 2.0,
          scoreDescription: "Mínimo",
        },
        {
          score: 3.0,
          scoreDescription: "Aceptable",
        },
        {
          score: 4.0,
          scoreDescription: "Bueno",
        },
        {
          score: 5.0,
          scoreDescription: "Excelente",
        },
      ],
    },
    {
      code: "CF07",
      criteriaDescription: "Demanda Externa: Puestos disponibles",
      weight: 0.0,
      category_id: 3,
      bootcamp_id: bootcamp.id,
      score: [
        {
          score: 0.0,
          scoreDescription: "N/R",
        },
        {
          score: 1.0,
          scoreDescription: "Insuficiente",
        },
        {
          score: 2.0,
          scoreDescription: "Mínimo",
        },
        {
          score: 3.0,
          scoreDescription: "Aceptable",
        },
        {
          score: 4.0,
          scoreDescription: "Bueno",
        },
        {
          score: 5.0,
          scoreDescription: "Excelente",
        },
      ],
    },
    {
      code: "CF08",
      criteriaDescription: "Testimonios Auditados: De egresados",
      weight: 0.0,
      category_id: 3,
      bootcamp_id: bootcamp.id,
      score: [
        {
          score: 0.0,
          scoreDescription: "N/R",
        },
        {
          score: 1.0,
          scoreDescription: "Insuficiente",
        },
        {
          score: 2.0,
          scoreDescription: "Mínimo",
        },
        {
          score: 3.0,
          scoreDescription: "Aceptable",
        },
        {
          score: 4.0,
          scoreDescription: "Bueno",
        },
        {
          score: 5.0,
          scoreDescription: "Excelente",
        },
      ],
    },
    {
      code: "CF09",
      criteriaDescription:
        "Testimonios Auditados: De organizaciones referentes",
      weight: 0.0,
      category_id: 3,
      bootcamp_id: bootcamp.id,
      score: [
        {
          score: 0.0,
          scoreDescription: "N/R",
        },
        {
          score: 1.0,
          scoreDescription: "Insuficiente",
        },
        {
          score: 2.0,
          scoreDescription: "Mínimo",
        },
        {
          score: 3.0,
          scoreDescription: "Aceptable",
        },
        {
          score: 4.0,
          scoreDescription: "Bueno",
        },
        {
          score: 5.0,
          scoreDescription: "Excelente",
        },
      ],
    },
  ]

  const [resultadosVerificados, setResultadosVerificados] = useState(
    resultadosVerificadosRaw
  )

  const [experienciaFormativa, setExperienciaFormativa] = useState(
    experienciaFormativaRaw
  )

  const [confianza, setConfianza] = useState(confianzaRaw)

  const [viewMode, setViewMode] = useState("create")

  const getAssesstments = async () => {
    const assessmentController = new AssessmentController()

    const assesstmentsResponse = await assessmentController.findAllByBootcampId(
      bootcamp.id
    )
    if (assesstmentsResponse.length > 0) {
      // Recorrer resultadosVerificados y asignar el valor de weight de assesstmentsResponse a resultadosVerificados
      const resultadosVerificadosActualizados = resultadosVerificados.map(
        (item: CriteriaInterface) => {
          const assesstment = assesstmentsResponse.find(
            (assesstment: AssessmentModel) =>
              assesstment.criteria_id === item.code
          )
          if (assesstment) {
            item.weight = assesstment.weight
          }
          return item
        }
      )

      setResultadosVerificados(resultadosVerificadosActualizados)

      const experienciaFormativaActualizada = experienciaFormativa.map(
        (item: CriteriaInterface) => {
          const assesstment = assesstmentsResponse.find(
            (assesstment: AssessmentModel) =>
              assesstment.criteria_id === item.code
          )
          if (assesstment) {
            item.weight = assesstment.weight
          }
          return item
        }
      )

      setExperienciaFormativa(experienciaFormativaActualizada)

      const confianzaActualizada = confianza.map((item: CriteriaInterface) => {
        const assesstment = assesstmentsResponse.find(
          (assesstment: AssessmentModel) =>
            assesstment.criteria_id === item.code
        )
        if (assesstment) {
          item.weight = assesstment.weight
        }
        return item
      })

      setConfianza(confianzaActualizada)

      setViewMode("update")
    } else {
      setViewMode("create")
    }
  }

  const handleResultadosVerificados = (
    value: React.ChangeEvent<HTMLSelectElement>,
    criteria_id: string
  ) => {
    const newResultadosVerificados = resultadosVerificados.map(
      (item: CriteriaInterface) => {
        if (item.code === criteria_id) {
          item.weight = Number(value.target.value)
        }
        return item
      }
    )
    setResultadosVerificados(newResultadosVerificados)
  }

  const handleExperienciaFormativa = (
    value: React.ChangeEvent<HTMLSelectElement>,
    criteria_id: string
  ) => {
    const newExperienciaFormativa = experienciaFormativa.map(
      (item: CriteriaInterface) => {
        if (item.code === criteria_id) {
          item.weight = value.target.selectedIndex
        }
        return item
      }
    )
    setExperienciaFormativa(newExperienciaFormativa)
  }

  const handleConfianza = (
    value: React.ChangeEvent<HTMLSelectElement>,
    criteria_id: string
  ) => {
    const newConfianza = confianza.map((item: CriteriaInterface) => {
      if (item.code === criteria_id) {
        item.weight = value.target.selectedIndex
      }
      return item
    })
    setConfianza(newConfianza)
  }

  const handleSubmit = async () => {
    const assessmentController = new AssessmentController()
    const allCriteria = [
      ...resultadosVerificados,
      ...experienciaFormativa,
      ...confianza,
    ]
    const allCriteriaFlatMap = allCriteria
      .flatMap((item) => item)
      .map((item) => {
        return {
          bootcamp_id: bootcamp.id,
          category_id: item.category_id,
          criteria_id: item.code,
          weight: item.weight,
        }
      })
    try {
      if (viewMode === "create") {
        await assessmentController.createMany(bootcamp.id, allCriteriaFlatMap)
        showAlert(
          "Assessment created successfully",
          "The assessment was created successfully",
          "success"
        )
      } else if (viewMode == "update") {
        await assessmentController.updateMany(bootcamp.id, allCriteriaFlatMap)
        showAlert(
          "Assessment updated successfully",
          "The assessment was updated successfully",
          "success"
        )
      }
    } catch (error) {
      showAlert(
        `Error ${viewMode == "create" ? "Creating" : "Updating"} assessment`,
        `There was an error ${
          viewMode == "create" ? "creating" : "updating"
        } the assessment`,
        "error"
      )
    }
  }

  useEffect(() => {
    getAssesstments()
  }, [])

  return (
    <>
      <ListAssessmentBootcampBackofficeView
        resultadosVerificados={resultadosVerificados}
        experienciaFormativa={experienciaFormativa}
        confianza={confianza}
        viewMode={viewMode}
        onChangeResultadosVerificados={handleResultadosVerificados}
        onChangeExperienciaFormativa={handleExperienciaFormativa}
        onChangeConfianza={handleConfianza}
        onSubmit={handleSubmit}
      />
    </>
  )
}

export default ListAssessmentBootcampBackofficeContainer
