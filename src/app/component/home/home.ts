import { Component } from '@angular/core';
import { RouterEvent, RouterModule, RouterOutlet } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';
import { Store } from '@ngrx/store';
import { selectUserEmail } from '../../store/user/user.selectors';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-home',
  imports: [RouterOutlet, RouterModule, Sidebar, CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
showSidebar = true;
email:string='';
isUserLoggedIn:boolean=false;
constructor(private store:Store){}  
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
}
