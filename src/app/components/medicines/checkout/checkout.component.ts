import { Component, OnInit } from '@angular/core';
import { MedicinesService } from 'src/app/services/medicines.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  totalPrice: number = 0;

  constructor(private medicinesService: MedicinesService) { }

  ngOnInit(): void {
    this.totalPrice = this.medicinesService.cartMedicines.reduce((prev, next) => prev + (next['price'] * next['quantity']), 0);
  }
  
}


