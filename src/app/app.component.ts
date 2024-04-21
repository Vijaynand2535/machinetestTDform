import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'machinetestTDform';
  @ViewChild ("signup") signup!: NgForm
  mocArr = [
  {contactMode : 'Email', id : 123},
  {contactMode : 'Phone', id : 124}
  ]
  userdetails = {
  "userInfo": { 
    "username": "vijaybenkunde", 
    "email": "vijay@gmail.com" 
  }, 
    "secretquestions": "favouritebook", 
    "answer": "my book", 
    "isSubscribe": true, 
    "modeofcontact": "Email" 

  }
  constructor(){

  }
ngOnInit(): void {
  
}
  onSignUp(signup : NgForm){
    
    // if(signup.valid){
    //   // console.log(signup.valid);
    //   // console.log(signup);
    //   console.log(signup.value);
      
    // }
    console.log(signup.value);
  }
  onEdit(){
    this.signup.form.patchValue(this.userdetails)
  }
}

