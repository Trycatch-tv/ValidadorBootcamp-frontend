import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui"
import Layout from "@/layout/Layout"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FC } from "react"

library.add(faStar)

interface Props {}

const RankingView: FC<Props> = () => {
  const data = [
    {
      id: 1,
      nombre: "Bootcamp A",
      pais: "USA",
      modalidad: "Presencial",
      score: 90,
      insignias: 3,
    },
    {
      id: 2,
      nombre: "Bootcamp B",
      pais: "España",
      modalidad: "Online",
      score: 85,
      insignias: 2,
    },
    {
      id: 3,
      nombre: "Bootcamp C",
      pais: "México",
      modalidad: "Presencial",
      score: 88,
      insignias: 4,
    },
    {
      id: 4,
      nombre: "Bootcamp D",
      pais: "Argentina",
      modalidad: "Online",
      score: 78,
      insignias: 1,
    },
  ]

  return (
    <Layout>
      {/* Ranking */}
      <div>
        <div>
          <h3 className="font-semibold text-lg">Ranking de Bootcamps</h3>
        </div>
        <div className="mt-4">
          <Table className="table table-bordered table-striped">
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead>País</TableHead>
                <TableHead>Modalidad</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Insignias</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.nombre}</TableCell>
                  <TableCell>{item.pais}</TableCell>
                  <TableCell>{item.modalidad}</TableCell>
                  <TableCell>{item.score}</TableCell>
                  <TableCell>{item.insignias}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Layout>
  )
}

export default RankingView
