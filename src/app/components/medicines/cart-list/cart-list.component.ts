import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicinesService } from 'src/app/services/medicines.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  public totalItems:number=0;
  public totalPrice:number=0;

  constructor(private medicinesService: MedicinesService, private router: Router) { }

  ngOnInit(): void {
    this.calculate();
  }

  addMedToWishlist(med:any, removeBool:boolean, medIdx:number){
    this.medicinesService. addMedicinetToWhishlist(med, removeBool, medIdx);
    this.removeMedicineFromCart(medIdx);
    this.calculate();
  }

  removeMedicineFromCart(medIdx:number){ 
    let elements = this.medicinesService.cartMedicines.splice(medIdx, 1);
    console.log(elements[0]['title'], "Medicine Removed from Cart");
    this.calculate();
  }

  goTo(url:any){
    this.router.navigateByUrl(url);
  }

  calculate() {
    this.totalItems = this.medicinesService.cartMedicines.reduce((prev,next)=> prev+next['quantity'],0);
    this.totalPrice = this.medicinesService.cartMedicines.reduce((prev,next)=> prev+ (next['quantity']*next['price']),0);
  }


}
