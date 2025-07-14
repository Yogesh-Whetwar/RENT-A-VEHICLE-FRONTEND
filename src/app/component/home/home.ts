import { Component } from '@angular/core';
import { RouterEvent, RouterModule, RouterOutlet } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';
import { Store } from '@ngrx/store';
import { selectUserEmail } from '../../store/user/user.selectors';


@Component({
  selector: 'app-home',
  imports: [RouterOutlet,RouterModule,Sidebar],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
showSidebar = true;
  

constructor(private store:Store){}  
ngOnInit() {
this.store.select(selectUserEmail).subscribe(email =>{
      console.log('User Email:', email);
  })
}

  toggleSidebar(): void {
    this.showSidebar = !this.showSidebar;
  }
}
