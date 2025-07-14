import { Component } from '@angular/core';
import { ProfileService } from '../../service/profile/profile-service';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUserEmail, selectUserName, selectuserPassword } from '../../store/user/user.selectors';

@Component({
  selector: 'app-profile',
  imports: [RouterModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile {
  
userName?:string="";
userEmail?:string="";
userPassword?:string="";

  constructor(private profileService: ProfileService,private store:Store) {
    // You can inject the ProfileService here if needed
  }

  ngOnInit(): void {  
     this.store.select(selectUserName).subscribe(name=>{
          this.userName = name;
          console.log('User Name:', this.userName);
        })
    this.store.select(selectUserEmail).subscribe(email =>{
      this.userEmail = email;
      console.log('User Email:', this.userEmail);
    })
    this.store.select(selectuserPassword).subscribe(password =>{
      this.userPassword = password;
      console.log('User Password:', this.userPassword);
  // this.profileService.getProfileId('2@').subscribe(
  //   (response) => {
  //     console.log("Profile ID fetched successfully:", response);
  //     this.id = response;

  //     this.profileService.getProfile(this.id).subscribe(
  //       (profile) => {
  //         console.log("Profile details fetched successfully:", profile);
  //         this.name = profile.name;
  //         this.email = profile.email;
  //         this.password = profile.password;
  //       },
  //       (error) => {
  //         console.error("Error fetching profile details:", error);
  //       }
  //     );
  //   },
  //   (error) => {
  //     console.error("Error fetching profile ID:", error);
  //   }
  // );
})
  }
    showPassword: boolean = false;

togglePasswordVisibility(): void {
  this.showPassword = !this.showPassword;
} 


}

