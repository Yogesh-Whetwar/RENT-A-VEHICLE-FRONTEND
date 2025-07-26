import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-city-modal',
  imports: [FormsModule,CommonModule],
  templateUrl: './city-modal.html',
  styleUrl: './city-modal.scss'
})
export class CityModal {
  @Input() isOpen =false;
  @Output() closeSidebar = new EventEmitter<void>();
  @Output() citySelected = new EventEmitter<string>();

  searchTerm: string = '';

  cities = [
    { name: 'Mumbai', landmark: 'Gateway of India', image: 'assets/images/mumbai.png' },
    { name: 'Delhi', landmark: 'India Gate', image: 'assets/images/delhi.png' },
    { name: 'Agra', landmark: 'Taj Mahal', image: 'assets/images/taj.png' },
    { name: 'Jaipur', landmark: 'Hawa Mahal', image: 'assets/images/hawamahal.png' },
    { name: 'Hyderabad', landmark: 'Charminar', image: 'assets/images/charminar.png' },
    { name: 'Chennai', landmark: 'Marina Beach', image: 'assets/images/marina.png' },
    { name: 'Kolkata', landmark: 'Victoria Memorial', image: 'assets/images/victoria.png' },
    { name: 'Bengaluru', landmark: 'Vidhana Soudha', image: 'assets/images/vidhan.png' },
    { name: 'Pune', landmark: 'Shaniwar Wada', image: 'assets/images/wada.png' },
    { name: 'Ahmedabad', landmark: 'Sabarmati Ashram', image: 'assets/images/aashram.png' },
    { name: 'Varanasi', landmark: 'Ghats of Ganges', image: 'assets/varanasi.jpg' },
    { name: 'Lucknow', landmark: 'Bara Imambara', image: 'assets/lucknow.jpg' },
    { name: 'Amritsar', landmark: 'Golden Temple', image: 'assets/amritsar.jpg' },
    { name: 'Mysuru', landmark: 'Mysore Palace', image: 'assets/mysuru.jpg' },
    { name: 'Bhopal', landmark: 'Upper Lake', image: 'assets/bhopal.jpg' },
    { name: 'Patna', landmark: 'Golghar', image: 'assets/patna.jpg' },
    { name: 'Ranchi', landmark: 'Rock Garden', image: 'assets/ranchi.jpg' },
    { name: 'Chandigarh', landmark: 'Capitol Complex', image: 'assets/chandigarh.jpg' },
    { name: 'Tirupati', landmark: 'Tirumala Temple', image: 'assets/tirupati.jpg' },
    { name: 'Udaipur', landmark: 'City Palace', image: 'assets/udaipur.jpg' }
  ];

  filteredCities() {
    return this.cities.filter(city =>
      city.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  selectCity(city: string) {
    this.citySelected.emit(city);  
    console.log("selected city is : ",this.citySelected);
    this.closeModal();
  }

  closeModal() {
    this.closeSidebar.emit();
  }
}

