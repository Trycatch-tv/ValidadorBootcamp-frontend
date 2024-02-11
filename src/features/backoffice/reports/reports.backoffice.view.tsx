/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react"
import Layout from "@/layout/Layout"
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui"

import { Link } from "react-router-dom"

interface PropReports {
  bootcamp_id: string;
  bootcamp_name: string;
  location: string;
  modality: string;
  title: string;
  category: string;
  description: string;
}


const ReportsBackofficeView: FC<{ reports: PropReports[] }> = ({ reports }) => {
    
  return (
    <Layout>
      {/* Report */}
      <div>
        <div>
          <h3 className="font-semibold text-lg">Backoffice Report</h3>
        </div>
        <div className="mt-4">
          <Table className="table table-bordered table-striped">
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead>Ubicación</TableHead>
                <TableHead>Modalidad</TableHead>
                <TableHead>Título</TableHead>
                <TableHead>Categoría</TableHead> 
                <TableHead>Descripción</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
             {reports.map((report: PropReports, index: number) => (
                <TableRow key={report.bootcamp_id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{report.bootcamp_name}</TableCell>
                  <TableCell>{report.location}</TableCell>
                  <TableCell>{report.modality}</TableCell>
                  <TableCell>{report.title}</TableCell>
                  <TableCell>{report.category}</TableCell>
                  <TableCell>{report.description}</TableCell>
                  <TableCell>
                    <Link to={`/backoffice/report/${report.bootcamp_id}`}>
                      <Button size={"sm"} className="text-xs">Administrar</Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div>
        </div>
      </div>
    </Layout>
  );
}

export default ReportsBackofficeView;