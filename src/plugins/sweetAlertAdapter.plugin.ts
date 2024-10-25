import Swal, { SweetAlertOptions, SweetAlertIcon } from 'sweetalert2';

// Define a custom interface for the alert service
interface AlertService {
  fire: (options: SweetAlertOptions) => Promise<any>;
  success: (message: string) => Promise<any>;
  error: (message: string) => Promise<any>;
}

// Implement the AlertService interface with SweetAlert2
export const showAlert: AlertService = {
  fire: (options) => Swal.fire(options),

  success: (message) =>
    Swal.fire({
      title: 'Success!',
      text: message,
      icon: 'success' as SweetAlertIcon,
      confirmButtonText: 'OK'
    }),

  error: (message) =>
    Swal.fire({
      title: 'Error!',
      text: message,
      icon: 'error' as SweetAlertIcon,
      confirmButtonText: 'OK'
    })
};
