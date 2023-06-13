import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list/cart-list.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ViewProductComponent } from './view-product/view-product.component';



@NgModule({
  declarations: [
    CartListComponent,
    WishListComponent,
    CheckoutComponent,
    ViewProductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
