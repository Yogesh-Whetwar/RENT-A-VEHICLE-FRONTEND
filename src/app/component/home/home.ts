import { Component } from '@angular/core';
import { Router, RouterEvent, RouterModule, RouterOutlet } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';
import { Store } from '@ngrx/store';
import { selectUserEmail } from '../../store/user/user.selectors';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CityModal } from "../city-modal/city-modal";



@Component({
  selector: 'app-home',
  imports: [RouterOutlet, RouterModule, Sidebar, CommonModule, FormsModule, CityModal],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
showSidebar = true;
email:string='';
isUserLoggedIn:boolean=false;
constructor(private store:Store, private router:Router){}  
ngOnInit() {
this.store.select(selectUserEmail).subscribe(email =>{
      console.log('User Email:', email); 
     this.email = email;
     this.isUserLoggedIn = !!email; // Check if email is not empty
     console.log('Is User Logged In:', this.isUserLoggedIn);
  })
}

  toggleSidebar(): void {
    this.showSidebar = !this.showSidebar;
  }  
  logout():void{ 
    this.store.dispatch({type:'[User]Clear User'});
    this.isUserLoggedIn = false; // Update the login status
    console.log('User logged out');
    this.email = ''; // Clear the email
    // Optionally, you can navigate to a different route after logout
    // this.router.navigate(['/login']);
  }  
  moveToHome():void{
     this.router.navigate(['/header']);
  }  
showCityModal=false;
selectcity:string='';
openCityModal():void{  
  console.log("open city modal called");
  this.showCityModal=true;
} 
closeCityModal():void{
  this.showCityModal=false;
  this.selectcity='';
}  
handleCitySelection(city:string):void{
  this.selectcity=city;
  this.showCityModal=false;
  console.log('user selected: ',city);
}
  
}
