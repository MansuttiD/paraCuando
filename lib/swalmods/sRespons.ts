import Swal from 'sweetalert2';

const swalsucces = (message: string) => {
  Swal.fire({
    position: 'top',
    toast: true,
    icon: 'success',
    title: message,
    showConfirmButton: false,
    timer: 2000,
  });
};

const swalerror = (message: string) => {
  Swal.fire({
    position: 'top',
    toast: true,
    icon: 'error',
    title: message,
    showConfirmButton: false,
    timer: 2000,
  });
};

export { swalerror, swalsucces };
