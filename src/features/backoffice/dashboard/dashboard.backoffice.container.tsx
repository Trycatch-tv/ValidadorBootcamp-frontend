/* eslint-disable @typescript-eslint/no-unused-vars */
import BackofficeView from "./dashboard.backoffice.view"

interface BackofficeLinkProps {
    name: string
    path: string
  }

const routes: BackofficeLinkProps[] = [
    {
      name: "Backoffice de bootcamps",
      path: "/backoffice/bootcamp",
    },
    {
      name: "Backoffice Reports",
      path: "/backoffice/reports",
    },
    {
      name: "Backoffice Ranking",
      path: "/backoffice/ranking",
    },
    {
        name: "Backoffice User",
        path: "/backoffice/users",
      },
  ]


const DashboardBackofficeContainer = () => {
  return (
        <>
            <BackofficeView/>
        </>
    
  )
}

export default DashboardBackofficeContainer
