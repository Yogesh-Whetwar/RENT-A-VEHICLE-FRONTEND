import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-vendordashboard',
  imports: [RouterModule],
  templateUrl: './vendordashboard.html',
  styleUrl: './vendordashboard.scss'
})
export class Vendordashboard {  

  constructor(private router:Router){
     console.log('Router injected:', !!router);
  }
addVehicle() {
    this.router.navigate(['/header']);
  }

  viewVehicles() {
    alert('Displaying list of vehicles');
  }

  editVehicle() {
    alert('Launch Edit Vehicle modal');
  }

  deleteVehicle() {
    const confirmed = confirm('Are you sure you want to delete this vehicle?');
    if (confirmed) {
      alert('Vehicle deleted');
    }
  }
}
