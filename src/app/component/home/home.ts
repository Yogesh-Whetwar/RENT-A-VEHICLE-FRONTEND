import { Component } from '@angular/core';
import { RouterEvent, RouterModule, RouterOutlet } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';


@Component({
  selector: 'app-home',
  imports: [RouterOutlet,RouterModule,Sidebar],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
showSidebar = true;

  toggleSidebar(): void {
    this.showSidebar = !this.showSidebar;
  }
}
