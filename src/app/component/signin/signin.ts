import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SigninService } from '../../service/signin/signinService';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-signin',
  imports: [FormsModule,RouterModule],
  templateUrl: './signin.html',
  styleUrl: './signin.scss'
})
export class Signin {
  name:String ='';
  email:String='';
  password:String='';
  
  constructor(private signinService: SigninService){}

  addUser(){
    const user = {
      name: this.name,
      email: this.email,
      password: this.password
    };
    
    this.signinService.createUser(user).subscribe(
      response => {
        console.log('User created successfully');
        // Handle success, e.g., redirect to login or show a success message
      },
      error => {
        console.error('Error creating user', error);
        // Handle error, e.g., show an error message
      }
    );
  }
}
