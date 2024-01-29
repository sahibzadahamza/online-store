import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { ContactService } from 'src/app/services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit{
  contactForm:any = FormGroup;

constructor( private fb : FormBuilder, private contactService:ContactService){

  this.contactForm = this.fb.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    message: ['', Validators.required],
  });
}
  ngOnInit(): void {
    // this.contactForm = this.fb.group({
    //   firstname: new FormControl(''),
    //   lastname: new FormControl(''),
    //   phone: new FormControl(''),
    //   email: new FormControl(''),
    //   message: new FormControl(''),
    // }); 
  
  }
  submit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
  
      // Call the postContact method from your ContactService
      this.contactService.createContact(formData).subscribe(
        (response) => {
          // Show success message using SweetAlert2
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your message has been sent successfully',
          });
  
          // Optionally, reset the form after successful submission
          this.contactForm.reset();
        },
        (error) => {
          // Show error message using SweetAlert2
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Error submitting message. Please try again later.',
          });
  
          console.error('Error submitting message:', error);
        }
      );
    } else {
      // Show validation error message using SweetAlert2
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please fill out all required fields correctly.',
      });
    }
  }
  

// submit() {
//   console.log("this is value", this.contactForm.value)
//   if (this.contactForm.valid) {
//     // Get your EmailJS template ID and user ID from your EmailJS account
//     const templateParams = {
//       firstname: this.contactForm.value.firstname,
//       lastname: this.contactForm.value.lastname,
//       email: this.contactForm.value.email,
//       phone: this.contactForm.value.phone,
//       message: this.contactForm.value.message,
//     };

//     emailjs
//       .send('service_2v0mbdq', 'template_ohul0qe', templateParams, 'RMAF9_EacWIdPlMvg')
//       .then(
//         (response: EmailJSResponseStatus) => {
//           console.log('Email sent successfully', response);
//           // Handle success, e.g., show a success message to the user
//           Swal.fire({
//             icon: 'success',
//             title: 'Email sent successfully!',
//             text: 'We will get back to you as soon as possible.'})
//         },
//         (error) => {
//           console.log('Error sending email', error);
//           // Handle error, e.g., show an error message to the user
//           Swal.fire({
//             icon: 'error',
//             title: 'Error sending email',
//             text: 'Please try again later.',
//           });
//         }
//       );
//   }

// }
}
