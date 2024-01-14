import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
constructor(private router:Router){}

gotofaq(){
  this.router.navigate(['/customercare/faq'])
  console.log("this is faq")
}
gotoshipping(){
  this.router.navigate(['/customercare/shipping'])
}
gotoreturns(){
  this.router.navigate(['/customercare/returns'])
}
gotoprivacy(){
  this.router.navigate(['/customercare/privacy-policy'])
}
}
