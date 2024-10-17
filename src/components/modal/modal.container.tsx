import { FC, ReactNode, useEffect } from "react"
import { useGlobalStore } from "../../stores/global/global.store"
import ModalView from "./modal.view"

interface Props {
  isDialogOpen: boolean
  setDialogOpen: (value: boolean) => void
  title: string
  children: ReactNode
}

const ModalContainer: FC<Props> = ({
  isDialogOpen,
  setDialogOpen,
  title,
  children,
}) => {
  const { modalState, setModalState } = useGlobalStore((state) => state)
  const closeDialog = () => setDialogOpen(false)

  useEffect(() => {
    setDialogOpen(false)
    setModalState("")
  }, [modalState])
  return (
    <>
      <ModalView
        isDialogOpen={isDialogOpen}
        title={title}
        closeDialog={closeDialog}
      >
        {children}
      </ModalView>
    </>
  )
}

export default ModalContainer
