import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishListComponent } from './wish-list/wish-list.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MedicinesComponent } from './medicines.component';
import { MedicinesService } from 'src/app/services/medicines.service';



@NgModule({
  declarations: [
    MedicinesComponent,
    WishListComponent,
    CartListComponent,
    CheckoutComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[MedicinesService]
})
export class MedicinesModule { }
