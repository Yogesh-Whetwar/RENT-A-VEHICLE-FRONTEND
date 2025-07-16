import { CommonModule } from '@angular/common';
import { Component,OnDestroy,OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-bike-carousel',
  imports: [CommonModule],
  templateUrl: './bike-carousel.html',
  styleUrl: './bike-carousel.scss'
})
export class BikeCarousel {
  //  bikes: string[] = [
  //   'assets/images/active.png',
  //   'assets/images/avenger.png',
  //   'assets/images/fzs.png'
  // ];

  // currentIndex = 0;

  // ngOnInit(): void {
  //   // setInterval(() => {
  //   //   this.currentIndex = (this.currentIndex + 1) % this.bikes.length;
  //   // }, 3000);
  // }
}
