import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { VendorService } from '../../service/vendor/vendor-service';
import { Store } from '@ngrx/store';
import { selectUserEmail, selectUserName, selectuserPassword, selectuserRole } from '../../store/user/user.selectors';
import { ProfileService } from '../../service/profile/profile-service';

@Component({
  selector: 'app-admin',
  imports: [FormsModule,CommonModule],
  templateUrl: './admin.html',
  styleUrl: './admin.scss'
})
export class Admin {
  userId:number=2;
  userEmail:string='bhaii@gmail.com';
  userName:string='';
  userPassword:string='';
  userRole:string='';
constructor(private vendorService:VendorService,private store:Store,private profileService:ProfileService){}

public vendors:Vendor[] =[];

 getAllVendors(): void {
  this.vendorService.getAllVendors().subscribe(
    (response) => {
      console.log("Vendors fetched successfully", response);
      this.vendors = response;
    },
    (error) => {
      console.log("Error while fetching vendors", error);
    }
  );
}


ngOnInit():void{  
  this.getAllVendors();
  
 this.store.select(selectUserName).subscribe(name => {
      this.userName = name;
    });
   
    // this.store.select(selectUserEmail).subscribe(email => {
    //   this.userEmail = email;
    // });

    this.store.select(selectuserPassword).subscribe(password => {
      this.userPassword = password;
    }); 
    this.store.select(selectuserRole).subscribe(role=>{
      this.userRole=role;
    })

}

confirmAction(vendorId: number, action: 'APPROVED' | 'REJECTED'): void {
  const confirmation = window.confirm(
    `Are you sure you want to ${action} this vendor?`
  );
  if (confirmation) {
    // this.updateStatus(vendorId, action);
    console.log("Confirmed",action);
  }  
 console.log(this.userEmail);
 console.log(action); 
  if(action == 'APPROVED'){
   //change the status from pending to approved and role of user to user to vendor 

   this.vendorService.changeStatus(this.userEmail,action).subscribe(
    (response)=>{   


        const user = { 
          id:this.userId,
          name: this.userName,
          email: this.userEmail,
          password: this.userPassword,
          role:this.userRole
        };

        this.profileService.changeUserRole(this.userEmail,"Vendor").subscribe(
          response => {
            console.log("Status updated successfully in user section");
          },
          error => {
            console.log("Error in profile update", error);
          }
        );      
       console.log("Status changed: ",response);  
       this.getAllVendors();
    },
    (error)=>{
       console.log(error);
    }
   )
  }

  if(action == 'REJECTED'){
    //change the status only to rejected  
     this.vendorService.changeStatus(this.userEmail,action).subscribe(
    (response)=>{   

         this.profileService.changeUserRole(this.userEmail,"User").subscribe(
          (response) => {
            console.log("Status updated successfully in user section",response);
          },
          error => {
            console.log("Error in profile update", error);
          }
        );    

       console.log("Status changed: ",response);  
       this.getAllVendors();
    },
    (error)=>{
       console.log(error);
    }
   )
  }  
 
}




  

//   updateStatus(vendorId: number, status: string): void {
//   // Your logic here, e.g. call a service
//   console.log(`Updating vendor ${vendorId} to status: ${status}`);
// }

//   updateVendorStatus(id: number, newStatus: string): Observable<any> {
//     const vendor = this.vendors.find(v => v.id === id);
//     if (vendor && vendor.status === 'pending') {
//       vendor.status = newStatus;
//     }
//     return of({ message: 'Status updated', vendor });
//   }
}
