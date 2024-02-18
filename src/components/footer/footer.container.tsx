import FooterView from "./footer.view"

const FooterContainer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <FooterView year={year} />
    </>
  )
}

export default FooterContainer
