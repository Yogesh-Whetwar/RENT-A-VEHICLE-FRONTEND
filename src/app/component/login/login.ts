import { Component } from '@angular/core';
import { RouterModule ,Router} from '@angular/router';

import { FormsModule } from '@angular/forms';
import { LoginService } from '../../service/login/loginService';
import { Store } from '@ngrx/store';
import { setUser } from '../../store/user/user.action';
import { ProfileService } from '../../service/profile/profile-service';

@Component({
  selector: 'app-login',
  imports: [RouterModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {   
  userId:number=0;
  userName:string='';
  email: string = '';
  password: string = '';
 

  constructor(private loginServ:LoginService,private router: Router,private store:Store,private profileService:ProfileService) {}

  // Placeholder for login logic
loginUser() {
    const user = {
      email: this.email,
      password: this.password
    };

    this.loginServ.checkUser(user).subscribe(
  (res: boolean) => {
      if (res) {  
        this.profileService.getProfileId(this.email).subscribe(
          (response)=>{
            this.userId=response;
            console.log("User ID fetched successfully:", this.userId + " for email: " + this.email+"   res is:"+response) ;
             this.profileService.getProfile(this.userId).subscribe(
          (response)=>{
            this.userName=response.name;
              this.store.dispatch(setUser(
        {  
        id:this.userId,
        name:this.userName,
        email: this.email,
        password: this.password
      }
    ));
          },
          (error)=>{
            console.log("Error fetching user profile:", error);
          }
        )
          },
          (error)=>{
            console.log("Error fetching user ID:", error);
          }
        )  

       
      console.log('Login successful');  
      // Dispatch an action to update the store if needed
    
      this.router.navigate(['/header']);
    } else {
      console.log('Invalid credentials');
    }
  },
  (error) => {
    console.error('Error during login:', error);
  }
);

  }

}
