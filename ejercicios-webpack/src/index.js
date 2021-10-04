// import { suma, saludo } from "./operaciones";
// import {Swal, Toast} from 'sweetalert2'

// document.write(`<h1>${suma(1,2)}</h1>`);
// document.write(`<h1>${suma(1,10)}</h1>`);
// document.write(`<h1>${suma(1,20)}</h1>`);
// console.log(suma(1,2));
// console.log(saludo)

// const Toast = Swal.mixin({
//     toast: true,
//     position: 'top-end',
//     showConfirmButton: false,
//     timer: 3000,
//     timerProgressBar: true,
//     didOpen: (toast) => {
//       toast.addEventListener('mouseenter', Swal.stopTimer)
//       toast.addEventListener('mouseleave', Swal.resumeTimer)
//     }
//   })
  
//   Toast.fire({
//     icon: 'success',
//     title: 'Niver Mtz'
//   })

import 'fslightbox';

fsLightboxInstances['first-lightbox'].open(0);
fsLightboxInstances['second-lightbox'].props.onOpen = () => console.log('Lightbox open!');