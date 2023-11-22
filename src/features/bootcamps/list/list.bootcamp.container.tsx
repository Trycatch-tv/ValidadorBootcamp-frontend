import ListBootcampView from './list.bootcamp.view'

const bootcamps=[
    {
      name:"Bootcamp 1",
      id:1,
      description:"lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      name:"Bootcamp 2",
      id:2,
      description:"lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      name:"Bootcamp 3",
      id:3,
      description:"lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      name:"Bootcamp 4",
      id:4,
      description:"lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      name:"Bootcamp 5",
      id:5,
      description:"lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    }
  ]
const ListBootcampContainer = () => {
  return (
    <>
      <ListBootcampView bootcamps={bootcamps}/>
    </>
  )
}

export default ListBootcampContainer
