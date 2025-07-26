import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { QRCodeComponent } from 'angularx-qrcode';
import { AmountService } from '../../service/amount/amount-service';

@Component({
  selector: 'app-qr',
  imports: [QRCodeComponent,CommonModule],
  templateUrl: './qr.html',
  styleUrl: './qr.scss'
})
export class Qr {
 public amount: number = 0;

  public qrData: string = '';
 constructor(
  private amountService: AmountService,
 
) {}
  ngOnInit() {
    // Replace with your actual payment URL or UPI string
     this.amountService.amount$.subscribe(value => {
      this.amount = value;
     const upiId = '8827452370@ybl';
     this.qrData=`upi://pay?pa=${upiId}&pn=yogesh&am=${this.amount}&cu=INR`;
      });
}
}
