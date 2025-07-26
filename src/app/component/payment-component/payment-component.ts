import { Component } from '@angular/core';
import { PaymentService } from '../../service/payment/payment-service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { error } from 'console';

declare var Razorpay: any;
@Component({
  selector: 'app-payment-component',
  imports: [],
  templateUrl: './payment-component.html',
  styleUrl: './payment-component.scss'
})
export class PaymentComponent {

amount = 0; // Example amount

  constructor(private http: HttpClient, private router: Router,private paymentService:PaymentService) {}

ngOnInit(): void {
  this.amount = this.paymentService.getAmount();
  // if (this.amount === 0) {
  //   console.warn('Amount not set—redirecting to vehicle selection');
  //   // this.router.navigate(['/vehicles']);
  // }
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
      handler: (response: any) => {
        console.log('Payment Success:', response);
        this.router.navigate(['/payment-success'], {
          queryParams: {
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature
          }
        }); 
    
      },
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
  }

}
