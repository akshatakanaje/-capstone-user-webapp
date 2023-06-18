import { Component, OnInit } from '@angular/core';
import { MedicinesService } from 'src/app/services/medicines.service';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})
export class MedicinesComponent implements OnInit {

   public medicines:any[]=[];
   fetching: boolean = false;

  constructor(private medicinesService: MedicinesService) { }

  ngOnInit(): void {
    
  }

  getMedicines(){
    this.medicinesService.getMedicines();
    this.medicinesService.medicinesSub.subscribe((data)=>{
      if(data.length !=0){
        this.medicines = Object.assign([], data);
        this.fetching = false;
        console.log(this.medicines);
        
      }
    })
  }

  addMedicineToShoppingCart(medicines:any){
    this.medicinesService.addMedicineToShoppingCart(medicines);
  }

  addMedicinetToWhishlist(medicines:any){
    this.medicinesService.addMedicinetToWhishlist(medicines);
  }

}