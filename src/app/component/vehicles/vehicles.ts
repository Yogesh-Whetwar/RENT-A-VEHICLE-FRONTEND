import { Component } from '@angular/core';
import { bikes, cars } from '../../../dummy';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehicles',
  imports: [CommonModule],
  templateUrl: './vehicles.html',
  styleUrl: './vehicles.scss'
})
export class Vehicles {
  //from the api we will get car ad bike details
bikeList = bikes;
  carList = cars;
}
