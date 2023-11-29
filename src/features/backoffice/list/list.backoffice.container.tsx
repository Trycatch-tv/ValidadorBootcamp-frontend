import ListBackofficeView from "./list.backoffice.view"


const ListBackofficeContainer = () => {
    const panels = [
        {
            title: "Bootcamps",
            route: "bootcamps"
        },
        {
            title: "Usuarios",
            route: "users"
        },
        {
            title: "Reportes",
            route: "reports"
        },
        {
            title: "Ranking",
            route: "ranking"
        }
    ]
    return(
        <ListBackofficeView panels={panels}/>
    )
}

export default ListBackofficeContainer