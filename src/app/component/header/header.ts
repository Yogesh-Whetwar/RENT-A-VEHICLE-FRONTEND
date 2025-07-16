import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Home } from '../home/home';
import { BikeCarousel } from '../bike-carousel/bike-carousel';
import { Vehicles } from '../vehicles/vehicles';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-header',
  imports: [CommonModule, FormsModule,Home,BikeCarousel,RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
     bikes = [
    {
      id: 1,
      name: 'Honda Activa',
      imageUrl: 'assets/images/activa.jpg',
      description: 'Perfect for city rides and errands.',
      price: 300
    },
    {
      id: 2,
      name: 'Yamaha FZ',
      imageUrl: 'assets/images/fz.jpg',
      description: 'Sporty and powerful for longer trips.',
      price: 40
    },
    {
      id: 3,
      name: 'Royal Enfield Classic',
      imageUrl: 'assets/images/classic.jpg',
      description: 'Cruise in style with this classic ride.',
      price: 50
    }
  ];
}
