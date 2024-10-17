import { FC, ReactNode } from "react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog"

interface Props {
  isDialogOpen: boolean
  title: string
  children: ReactNode
  closeDialog: () => void
}

const ModalView: FC<Props> = ({
  isDialogOpen,
  title,
  children,
  closeDialog,
}) => {
  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={closeDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{children}</DialogDescription>
            <DialogClose />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ModalView
