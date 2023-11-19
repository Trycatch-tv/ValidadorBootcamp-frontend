import ProfileBootcampView from "./profile.bootcamp.view"

const ProfileBootcampContainer = () => {
  const comments = [
    {
      url: "https://picsum.photos/100",
      comentario:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      url: "https://picsum.photos/100",
      comentario:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      url: "https://picsum.photos/100",
      comentario:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      url: "https://picsum.photos/100",
      comentario:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      url: "https://picsum.photos/100",
      comentario:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    // Agrega más datos según sea necesario
  ]
  return (
    <>
      <ProfileBootcampView comments={comments} />
    </>
  )
}

export default ProfileBootcampContainer
