import React, { useState, useEffect } from 'react';
import ListReportContainer from './ReportList';
import FormReportContainer from './ReportForm';
import { getReports, createReport, updateReport, deleteReport } from 'api/reports';

interface ReportData {
  id: number;
  title: string;
  category: string;
  description: string;
}

const ReportsBackofficeContainer = () => {
  const [reports, setReports] = useState<ReportData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const reportsData = await getReports();
      setReports(reportsData);
    };
    fetchData();
  }, []);

  const handleCreateReport = async (reportData: ReportData) => {
    const newReport = await createReport(reportData);
    setReports([...reports, newReport]);
  };

  const handleUpdateReport = async (reportId: number, updatedData: ReportData) => {
    const updatedReport = await updateReport(reportId, updatedData);
    const updatedReports = reports.map((report) =>
      report.id === reportId ? updatedReport : report
    );
    setReports(updatedReports);
  };

  const handleDeleteReport = async (reportId: number) => {
    await deleteReport(reportId);
    const updatedReports = reports.filter((report) => report.id !== reportId);
    setReports(updatedReports);
  };

  return (
    <div>
      <ListReportContainer reports={reports} onDelete={handleDeleteReport} />
      <FormReportContainer onCreate={handleCreateReport} onUpdate={handleUpdateReport} />
    </div>
  );
};

export default ReportsBackofficeContainer;