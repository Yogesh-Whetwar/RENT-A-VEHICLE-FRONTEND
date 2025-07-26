import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VehicleService } from '../../service/vehicle/vehicle-service';

@Component({
  selector: 'app-add-vehicle',
  imports: [CommonModule,FormsModule],
  templateUrl: './add-vehicle.html',
  styleUrl: './add-vehicle.scss'
})
export class AddVehicle {
   imageUrl: string | null = null;

  vehicle: any = {
    name: '',
    type: '',
    fuel: '',
    gear: '',
    price: 0,
    description: '',
    city: '',
    vendorEmail: '',
    contact: '',
    imageUrl: '',
    pickupLocation: '',
    vendor: ''
  };

  constructor(private http: HttpClient,private vehicleService:VehicleService) {}

  onImageSelected(event: any) {
    const file = event.target.files[0];
    const formData = new FormData();

    formData.append('file', file);
    formData.append('upload_preset', 'vehicle_upload');
    formData.append('folder', 'vehicles');

    this.http.post('https://api.cloudinary.com/v1_1/yogeshwhetwar/image/upload', formData)
      .subscribe((response: any) => {
        this.imageUrl = response.secure_url;
        this.vehicle.imageUrl = response.secure_url; // assign to model
      });
  }

  submitVehicle() {
    this.vehicleService.addVehicle(this.vehicle).subscribe(
      (response)=>{
         console.log(response);
      },
      (error)=>{
       console.log("Error in adding vehicle: ",error);
      }
    )
  }
}
