// src/app/services/payment.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  
   private amount=0;
   setAmount(value:number){ 
    console.log("set method called ",value);
    this.amount=value;
   }  

   getAmount():number{ 
    console.log("Get method called");
    return this.amount;
   }
}
