import { Component } from '@angular/core';
import { ProfileService } from '../../service/profile/profile-service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [RouterModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile {
  
name:string="";
email:string="";
password:string="";

  constructor(private profileService: ProfileService) {
    // You can inject the ProfileService here if needed
  }
 id:number=-1;
  ngOnInit(): void {
  this.profileService.getProfileId('2@').subscribe(
    (response) => {
      console.log("Profile ID fetched successfully:", response);
      this.id = response;

      this.profileService.getProfile(this.id).subscribe(
        (profile) => {
          console.log("Profile details fetched successfully:", profile);
          this.name = profile.name;
          this.email = profile.email;
          this.password = profile.password;
        },
        (error) => {
          console.error("Error fetching profile details:", error);
        }
      );
    },
    (error) => {
      console.error("Error fetching profile ID:", error);
    }
  );
}

    showPassword: boolean = false;

togglePasswordVisibility(): void {
  this.showPassword = !this.showPassword;
} 


}

