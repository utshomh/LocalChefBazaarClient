import Swal from "sweetalert2";

const baseConfig = {
  background: "bg-base-200",
  color: "text-base-content",
  customClass: {
    popup:
      "bg-base-100 text-base-content border border-base-300 shadow-xl rounded-xl",
    title: "text-lg font-semibold",
    htmlContainer: "text-sm text-base-content/90",
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-error",
    actions: "flex items-center justify-center gap-3",
  },
  buttonsStyling: false,
  confirmButtonText: "Okay",
  cancelButtonText: "Cancel",
  allowOutsideClick: true,
  scrollbarPadding: false,
};

const alert = {
  success: (title, text) =>
    Swal.fire({
      ...baseConfig,
      icon: "success",
      title,
      text,
    }),

  error: (title, text) =>
    Swal.fire({
      ...baseConfig,
      icon: "error",
      title,
      text,
    }),

  info: (title, text) =>
    Swal.fire({
      ...baseConfig,
      icon: "info",
      title,
      text,
    }),

  warning: (title, text) =>
    Swal.fire({
      ...baseConfig,
      icon: "warning",
      title,
      text,
    }),

  confirm: (title, text, onConfirm) =>
    Swal.fire({
      ...baseConfig,
      icon: "question",
      title,
      text,
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) onConfirm();
    }),
};

export default alert;
