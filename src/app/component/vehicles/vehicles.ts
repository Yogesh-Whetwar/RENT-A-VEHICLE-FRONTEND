import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { bikes, cars } from '../../../dummy';
import { Router } from '@angular/router';
import { AmountService } from '../../service/amount/amount-service';
import { PaymentService } from '../../service/payment/payment-service';
import { HttpClient } from '@angular/common/http';
import { VehicleService } from '../../service/vehicle/vehicle-service';
declare var Razorpay: any;
@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vehicles.html',
  styleUrl: './vehicles.scss',
})
export class Vehicles {
  bikeList = bikes;
  carList = cars;  


   VehicleList:any =[];

constructor(
  private paymentService: PaymentService,
  private vehicleService:VehicleService,
  private router: Router,
  private http:HttpClient
) {}

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
  ngOnInit(){
    this.getAllVehicles();
  }
 
   city="pune"; 
  getAllVehicles(){
    this.vehicleService.getAllVehicles().subscribe(
      (response:MyVehicle[])=>{
       console.log(response); 

       this.VehicleList=response;
        this.VehicleList = response.filter(v => v.city === this.city);
      //  console.log(this.VehicleList[0]);
      }
    ,
    (error)=>{
      console.log("Not able to get the vehicles; ",error);
    }
  )
  }


   
   filteredBikes(): any[] {
  return this.bikeList.filter(bike =>
    bike.city.toLowerCase() === this.city.toLowerCase()
  );
}

filteredCars(): any[] {
  return this.carList.filter(car =>
    car.city.toLowerCase() === this.city.toLowerCase()
  );
}  
//for now we are doing this but when we call bike details from backend we can use the citywise search for that
//no need to use filter here backend filter will do the work.
  viewAmount:Boolean=false;
  selectedVehicle: any = null;
  amount = 0;

  bookingData = {
    date: '',
    time: '',
    days: 1,
    pricePerHour: 0,
  };

  @ViewChild('bookingModal') bookingModal!: ElementRef;

  openBookingModal(vehicle: any): void {  
    // this.router.navigate(['/header'])
    this.selectedVehicle = vehicle;
    this.bookingData = {
      date: '',
      time: '',
      days: 1,
      pricePerHour: vehicle.price,
    };
    this.updateTotalPrice();

    // Delay access to ensure modal is rendered
    setTimeout(() => {
      const modalElement = this.bookingModal?.nativeElement;
      if (modalElement) {
        const modal = new (window as any).bootstrap.Modal(modalElement);
        modal.show();
      }
    });
  }
 
  updateTotalPrice(): void {
    this.amount = this.bookingData.days * 24 * this.bookingData.pricePerHour;
  }

 

confirmBooking(): void {
  this.paymentService.setAmount(this.amount); 
  this.viewAmount = true;
  this.initiateOrder();
  // this.router.navigate(['/payment']); // No queryParams here 👌 

}  


    initiateOrder(): void {
      this.http.post<any>('http://localhost:8080/api/payment/createOrder?amount=' + this.amount, {})
        .subscribe(response => {  
          console.log("initite called")
          this.openCheckout(response.id);
          //  setTimeout(() => this.openCheckout(response.id), 100);
        }, err => {
          console.error('Order creation failed:', err);
        });
    }
  
    openCheckout(orderId: string): void {
      const options = {
        key: 'rzp_test_SWDQwoRK0h2nA6', // Replace with your Razorpay test key
        amount: this.amount * 100,
        currency: 'INR',
        name: 'Rental Site',
        description: 'Rental Payment',
        order_id: orderId,
        // handler: (response: any) => {
        //   console.log('Payment Success:', response);
        //   this.router.navigate(['/payment-success'], {
        //     queryParams: {
        //       razorpay_payment_id: response.razorpay_payment_id,
        //       razorpay_order_id: response.razorpay_order_id,
        //       razorpay_signature: response.razorpay_signature
        //     }
        //   }); 
      
        // },
        prefill: {
          name: 'John Doe',
          email: 'john@example.com',
          contact: '9876543210'
        },
        theme: {
          color: '#3399cc'
        }
      };
  
      const rzp = new Razorpay(options);
      rzp.open();
      // this.router.navigate(['/header']);
    }  


  
  
    
}
