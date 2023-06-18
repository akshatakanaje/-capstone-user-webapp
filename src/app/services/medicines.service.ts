import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Behavior } from 'popper.js';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicinesService {
  

  public medicinesSub: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public whishlistMedicines:any[] =[];
  public cartMedicines:any[] =[];
  public medicines:any[] =[];
  public medicinesRetreived:boolean = false;


  constructor(private httpClient: HttpClient) { }

  //fetch data from rest apis
  public getMedicines() {
    this.httpClient.get(`${environment.apiUrl}/medicines`).subscribe( (response)=>{
      this.medicinesSub.next(Object.assign([],response));
      this.medicinesRetreived = true;
    })
  }

  // add medicines to cart 
  addMedicineToShoppingCart(med:any, medRemoveBool?: boolean, medIdx=-1) {
    // add product into cart for multiple time.
    if(this.cartMedicines.some(x=>x["id"]===med["id"])) { 
      let idx = this.cartMedicines.findIndex(x=> x["id"]===med["id"]);
      this.cartMedicines[idx]["quantity"] +=1;
      console.log(med['title'], "Alreay Added to Cart, Quantity Updated");
    } else{
      this.cartMedicines.push( {
        ...med,
        "quantity": 1
      });
      console.log(med['title'], "Medicine Added to Shoping Cart");
    }
    console.log(this.cartMedicines);

  }


  // add medicines to wish 
  addMedicinetToWhishlist(med:any, medRemoveBool?:boolean, medIdx:number=-1) {
    if(!this.whishlistMedicines.some(x=>x["id"]===med["id"])) {
      this.whishlistMedicines.push({
        ...med, "quantity":1
      });
      console.log(med['title'], "Medicine Added to Whishlist");
    } else {
      console.log(med['title'], "Already Added to Whishlist");
    }
    if(medRemoveBool) {
      this.medicines.splice(medIdx, 1);
    }
  }
}
