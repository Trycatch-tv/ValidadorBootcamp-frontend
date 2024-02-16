import RankingView from "./Ranking.view"

const RankingContainer = () => {
  const ranking = [
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
    <>
      <RankingView ranking={ranking} />
    </>
  )
}

export default RankingContainer
