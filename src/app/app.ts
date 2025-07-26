import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Home } from "./component/home/home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, Home],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'book-my-show-frontend';
}
