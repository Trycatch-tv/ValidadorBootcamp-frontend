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

interface Props {
  ranking: any
}

const RankingView: FC<Props> = ({ ranking }) => {
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
              {ranking.map((item) => (
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
