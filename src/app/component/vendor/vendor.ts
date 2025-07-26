import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectuserRole } from '../../store/user/user.selectors';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Vendordashboard } from "../vendordashboard/vendordashboard";

@Component({
  selector: 'app-vendor',
  imports: [CommonModule, FormsModule, Vendordashboard],
  templateUrl: './vendor.html',
  styleUrl: './vendor.scss'
})
export class Vendor {
 
   useRole:string='user';
   isVendorAuthorized:boolean=false;


  private apiUrl = 'http://localhost:8080/vendor/submitVendorForm';

  constructor(private http: HttpClient,private store:Store) {}

  ngOnInit(){
     this.store.select(selectuserRole).subscribe(role=>{
       this.useRole=role; 
       console.log("current role is : "+this.useRole);
       if(role == 'Vendor'){
          this.isVendorAuthorized=true;
       }else{
         this.isVendorAuthorized=false;
       }
     })
  }


  submitForm(
    name: string,
    email: string,
    number: string,
    address: string,
    aadhaar: File
  ): Observable<any> {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('number', number);
    formData.append('address', address);
    formData.append('aadhaar', aadhaar);
     console.log(formData)
    return this.http.post(this.apiUrl, formData);
  }   

}
