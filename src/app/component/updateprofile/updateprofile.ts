import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProfileService } from '../../service/profile/profile-service';
import { Observable } from 'rxjs';
import { error } from 'console';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUserEmail, selectUserName, selectuserPassword } from '../../store/user/user.selectors';

@Component({
  selector: 'app-updateprofile',
  imports: [FormsModule,RouterModule],
  templateUrl: './updateprofile.html',
  styleUrl: './updateprofile.scss'
})
export class Updateprofile {
userName?:string="";
userEmail?:string="";
userPassword?:string="";

constructor(private profileService:ProfileService,private store:Store){}  

ngOnInit():void{
   this.store.select(selectUserName).subscribe(name => {
      this.userName = name;
    });

    this.store.select(selectUserEmail).subscribe(email => {
      this.userEmail = email;
    });

    this.store.select(selectuserPassword).subscribe(password => {
      this.userPassword = password;
    });
}
updateProfile2() {
  
        const user = {
          name: this.userName,
          email: this.userEmail,
          password: this.userPassword
        };

        this.profileService.updateProfile(user).subscribe(
          response => {
            console.log("Profile updated successfully");
          },
          error => {
            console.log("Error in profile update", error);
          }
        );
      
}
}
