import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit{
  contactForm:any = FormGroup;

constructor( private fb : FormBuilder){

  this.contactForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    message: ['', Validators.required],
  });
}
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl(''),
    });  }


submit() {
  console.log("this is value", this.contactForm.value)
  if (this.contactForm.valid) {
    // Get your EmailJS template ID and user ID from your EmailJS account
    const templateParams = {
      firstname: this.contactForm.value.firstname,
      lastname: this.contactForm.value.lastname,
      email: this.contactForm.value.email,
      phone: this.contactForm.value.phone,
      message: this.contactForm.value.message,
    };

    emailjs
      .send('service_2v0mbdq', 'template_ohul0qe', templateParams, 'RMAF9_EacWIdPlMvg')
      .then(
        (response: EmailJSResponseStatus) => {
          console.log('Email sent successfully', response);
          // Handle success, e.g., show a success message to the user
          Swal.fire({
            icon: 'success',
            title: 'Email sent successfully!',
            text: 'We will get back to you as soon as possible.'})
        },
        (error) => {
          console.log('Error sending email', error);
          // Handle error, e.g., show an error message to the user
          Swal.fire({
            icon: 'error',
            title: 'Error sending email',
            text: 'Please try again later.',
          });
        }
      );
  }

}
}
