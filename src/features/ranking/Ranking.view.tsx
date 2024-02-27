import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui"
import Layout from "@/layout/Layout"
import { BootcampModel } from "@/models/bootcamp.model"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { ShieldCheck } from "lucide-react"
import { FC } from "react"

library.add(faStar)

interface Props {
  ranking: BootcampModel[]
  getAvatarBootcamp: (id: string) => string
}

const RankingView: FC<Props> = ({ ranking, getAvatarBootcamp }) => {
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
                <TableHead>Logo</TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead>País</TableHead>
                <TableHead>Modalidad</TableHead>
                <TableHead>Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ranking.map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <img
                      src={getAvatarBootcamp(item.id)}
                      alt={item.name}
                      datatype="image/png"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-row items-center">
                      {item.name}
                      {item.is_verified ? (
                        <ShieldCheck className="size-3.5 text-blue-400 fill-blue-200 ml-0.5" />
                      ) : (
                        ""
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="capitalize">
                    {item.country_name}
                  </TableCell>
                  <TableCell className="capitalize">{item.mode}</TableCell>
                  <TableCell>{item.score.toFixed(4)}</TableCell>
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
