import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProfileService } from '../../service/profile/profile-service';
import { Observable } from 'rxjs';
import { error } from 'console';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-updateprofile',
  imports: [FormsModule,RouterModule],
  templateUrl: './updateprofile.html',
  styleUrl: './updateprofile.scss'
})
export class Updateprofile {
 name:String ='a';
  email:String='b';
  password:String='c';
    
constructor(private profileService:ProfileService){}

updateProfile2(){
 const user = {
      name: this.name,
      email: this.email,
      password: this.password,
      id:1
    };
    
  this.profileService.updateProfile(user).subscribe(
      (response)=>{
        console.log("profile updated succesfully");
    },
    (error)=>{
       console.log("Error in profile updatedation",error);
    }
  )
}
}
