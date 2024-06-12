import ReportsBackofficeView from "./reports.backoffice.view";

const ReportsBackofficeContainer = () => {
  const reports = [
    {
      bootcamp_id: "dd411f58-caf1-4441-a807-252fdfad6596",
      bootcamp_name: "Berkeley Data Analytics Boot Camp",
      location: "Berkeley, CA",
      modality: "Online",
      title: "Why Choose Berkeley Data Analytics Boot Camp?",
      category: "Data Analytics",
      description:
        "Learn data analytics from intermediate Excel, Python, JavaScript, HTML5/CSS, API Interactions, SQL, Tableau, Fundamental Statistics, Machine Learning, Git/GitHub and more.",
    },
    {
      bootcamp_id: "bb230fe2-48e1-11ec-bf63-0242ac130002",
      bootcamp_name: "Rutgers Online Data Science Bootcamp",
      location: "Somerset, NJ",
      modality: "Online",
      title: "Learn Data Science in 24 Weeks",
      category: "Data Science",
      description:
        "Explore data science in 24 weeks with Rutgers Online Data Science Bootcamp. Gain proficiency in Excel, Python, JavaScript, SQL Databases, Tableau, and more.",
    },
    {
      bootcamp_id: "cc340fe3-48e1-11ec-bf63-0242ac130003",
      bootcamp_name: "Springboard Data Analytics Bootcamp",
      location: "Remote",
      modality: "Online",
      title: "Best Data Analytics Bootcamps",
      category: "Data Analytics",
      description:
        "Data analytics bootcamps have emerged as a popular choice for individuals seeking a fast-track entry into the world of data science and data analytics.",
    },
    {
      bootcamp_id: "dd450fe4-48e1-11ec-bf63-0242ac130004",
      bootcamp_name: "UC Berkeley Extension Data Analytics Program",
      location: "Remote",
      modality: "Online",
      title: "Why Choose Berkeley Data Analytics Boot Camp?",
      category: "Data Analytics",
      description:
        "You will receive a Certificate of Completion from UC Berkeley Extension after studying part-time over 24 weeks in our online data analytics program.",
    },
    {
      bootcamp_id: "ee560fe5-48e1-11ec-bf63-0242ac130005",
      bootcamp_name: "Rutgers Data Science Bootcamp",
      location: "Remote",
      modality: "Online",
      title: "Learn Data Science in 24 Weeks",
      category: "Data Science",
      description:
        "Explore data science in 24 weeks with Rutgers Online Data Science Bootcamp. Gain proficiency in Excel, Python, JavaScript, SQL Databases, Tableau, and more.",
    },
    {
      bootcamp_id: "ff670fe6-48e1-11ec-bf63-0242ac130006",
      bootcamp_name: "Springboard Data Analytics Bootcamp",
      location: "Remote",
      modality: "Online",
      title: "Best Data Analytics Bootcamps",
      category: "Data Analytics",
      description:
        "Data analytics bootcamps have emerged as a popular choice for individuals seeking a fast-track entry into the world of data science and data analytics.",
    },
  ];

  return (
    <>
      <ReportsBackofficeView reports={reports} />
    </>
  );
};

export default ReportsBackofficeContainer;
