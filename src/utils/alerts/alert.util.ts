import Swal from "sweetalert2"

export const showAlert = (
  title: string,
  text: string,
  icon: "success" | "error" | "warning" | "info" | "question" = "info"
) => {
  Swal.fire({
    title,
    text,
    icon,
    confirmButtonText: "Ok",
  })
}
