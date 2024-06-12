import ListBackofficeView from "./list.backoffice.view";

const ListBackofficeContainer = () => {
  const panels = [
    {
      title: "Bootcamps",
      route: "backoffice/bootcamps",
    },
    {
      title: "Usuarios",
      route: "backoffice/users",
    },
    {
      title: "Reportes",
      route: "backoffice/reports",
    },
  ];
  return <ListBackofficeView panels={panels} />;
};

export default ListBackofficeContainer;
