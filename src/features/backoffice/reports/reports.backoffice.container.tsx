/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui"
import { FC } from "react"
import { Link } from "react-router-dom"
import Layout from "@/layout/Layout"

interface Report {
  bootcamp_id: string;
  bootcamp_name: string;
  location: string;
  modality: string;
  title: string;
  category: string;
  description: string;
}

const getReports = async (): Promise<Report[]> => {
  throw new Error('getReports function is not implemented.');
};

const createReport = async (reportData: Report): Promise<Report> => {
  throw new Error('createReport function is not implemented.');
};

const updateReport = async (reportId: string, updatedData: Report): Promise<Report> => {
  throw new Error('updateReport function is not implemented.');
};

const deleteReport = async (reportId: string): Promise<void> => {
  throw new Error('deleteReport function is not implemented.');
};

const ReportsBackofficeContainer: FC = () => {
    const [reports, setReports] = useState<Report[]>([
        {
          bootcamp_id: "dd411f58-caf1-4441-a807-252fdfad6596",
          bootcamp_name: "Berkeley Data Analytics Boot Camp",
          location: "Berkeley, CA",
          modality: "Online",
          title: "Why Choose Berkeley Data Analytics Boot Camp?",
          category: "Data Analytics",
          description: "Learn data analytics from intermediate Excel, Python, JavaScript, HTML5/CSS, API Interactions, SQL, Tableau, Fundamental Statistics, Machine Learning, Git/GitHub and more."
       },
       {
          bootcamp_id: "bb230fe2-48e1-11ec-bf63-0242ac130002",
          bootcamp_name: "Rutgers Online Data Science Bootcamp",
          location: "Somerset, NJ",
          modality: "Online",
          title: "Learn Data Science in 24 Weeks",
          category: "Data Science",
          description: "Explore data science in 24 weeks with Rutgers Online Data Science Bootcamp. Gain proficiency in Excel, Python, JavaScript, SQL Databases, Tableau, and more."
       },
       {
          bootcamp_id: "cc340fe3-48e1-11ec-bf63-0242ac130003",
          bootcamp_name: "Springboard Data Analytics Bootcamp",
          location: "Remote",
          modality: "Online",
          title: "Best Data Analytics Bootcamps",
          category: "Data Analytics",
          description: "Data analytics bootcamps have emerged as a popular choice for individuals seeking a fast-track entry into the world of data science and data analytics."
       },
       {
          bootcamp_id: "dd450fe4-48e1-11ec-bf63-0242ac130004",
          bootcamp_name: "UC Berkeley Extension Data Analytics Program",
          location: "Remote",
          modality: "Online",
          title: "Why Choose Berkeley Data Analytics Boot Camp?",
          category: "Data Analytics",
          description: "You will receive a Certificate of Completion from UC Berkeley Extension after studying part-time over 24 weeks in our online data analytics program."
       },
       {
          bootcamp_id: "ee560fe5-48e1-11ec-bf63-0242ac130005",
          bootcamp_name: "Rutgers Data Science Bootcamp",
          location: "Remote",
          modality: "Online",
          title: "Learn Data Science in 24 Weeks",
          category: "Data Science",
          description: "Explore data science in 24 weeks with Rutgers Online Data Science Bootcamp. Gain proficiency in Excel, Python, JavaScript, SQL Databases, Tableau, and more."
       },
       {
          bootcamp_id: "ff670fe6-48e1-11ec-bf63-0242ac130006",
          bootcamp_name: "Springboard Data Analytics Bootcamp",
          location: "Remote",
          modality: "Online",
          title: "Best Data Analytics Bootcamps",
          category: "Data Analytics",
          description: "Data analytics bootcamps have emerged as a popular choice for individuals seeking a fast-track entry into the world of data science and data analytics."
       },
    ]);
    

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reportData = await getReports();
        setReports(reportData);
      } catch (error) {
        console.error('Error fetching Reports:', error);
      }
    };
    fetchData();
  }, []);

  const handleCreateReport = async (reportData: Report) => {
    try {
      const newReport = await createReport(reportData);
      setReports((prevReports) => [...prevReports, newReport]);
    } catch (error) {
      console.error('Error creating Report:', error);
    }
  };

  const handleUpdateReport = async (reportId: string, updatedData: Report) => {
    try {
      const updatedReport = await updateReport(reportId, updatedData);
      setReports((prevReports) =>
        prevReports.map((report) =>
          report.bootcamp_id === reportId ? updatedReport : report
        )
      );
    } catch (error) {
      console.error('Error updating Report:', error);
    }
  };

  const handleDeleteReport = async (reportId: string) => {
    try {
      await deleteReport(reportId);
      setReports((prevReports) =>
        prevReports.filter((report) => report.bootcamp_id !== reportId)
      );
    } catch (error) {
      console.error('Error deleting Report:', error);
    }
  };

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
                <TableHead>Categoría</TableHead> {/* Assuming you want to perform actions like edit/delete */}
                <TableHead>Descripción</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report, index) => (
                <TableRow key={report.bootcamp_id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{report.bootcamp_name}</TableCell>
                  <TableCell>{report.location}</TableCell>
                  <TableCell>{report.modality}</TableCell>
                  <TableCell>{report.title}</TableCell>
                  <TableCell>{report.category}</TableCell>
                  <TableCell>{report.description}</TableCell>
                  <TableCell>
                    <Link to={`/admin/report/${report.bootcamp_id}`}>
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

export default ReportsBackofficeContainer;

