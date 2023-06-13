import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './components/login/login.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductsComponent } from './components/products/products.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CartListComponent } from './components/products/cart-list/cart-list.component';
import { WishListComponent } from './components/products/wish-list/wish-list.component';
import { CheckoutComponent } from './components/products/checkout/checkout.component';
import { ViewProductComponent } from './components/products/view-product/view-product.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FormComponent,
    LoginComponent,
    AboutUsComponent,
    ContactUsComponent,
    ProductsComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
