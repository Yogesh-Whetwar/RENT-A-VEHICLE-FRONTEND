import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private url='http://localhost:8080/vehicle/add';
  private url2='http://localhost:8080/vehicle/getall';
  constructor(private http:HttpClient){};

  addVehicle(vehicle:any):Observable<any>{
    return this.http.post(this.url,vehicle);
  }
  
  getAllVehicles():Observable<any>{
    return this.http.get(this.url2);
  }


}
