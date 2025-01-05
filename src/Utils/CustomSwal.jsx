import Swal from "sweetalert2";
import './CustomSwal.css'
const CustomSwal = Swal.mixin({
    customClass: {
      popup: 'custom-swal-popup',
      backdrop: 'custom-swal-backdrop',
    },
    background: 'rgba(255, 255, 255, 0.2)', 
    backdrop: 'rgba(0, 0, 0, 0.5)', 
    buttonsStyling: true,
    
  });
  
  export default CustomSwal;