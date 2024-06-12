import Swal from "sweetalert2";

export const showAlert = (
  title: string,
  text: string,
  icon: "success" | "error" | "warning" | "info" | "question" = "info",
  time = 2000,
) => {
  Swal.fire({
    title,
    text,
    icon,
    confirmButtonText: "Ok",
    timer: time,
  });
};
