import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './components/login/login.component';
import { CartListComponent } from './components/medicines/cart-list/cart-list.component';
import { CheckoutComponent } from './components/medicines/checkout/checkout.component';
import { MedicinesComponent } from './components/medicines/medicines.component';
import { WishListComponent } from './components/medicines/wish-list/wish-list.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [  //generating lazy loading
{"path": '', redirectTo:'/dashboard', pathMatch:"full"},
{"path": 'dashboard', component: DashboardComponent},
{"path": 'login', component: LoginComponent},
{"path": 'form', component: FormComponent},
{"path": 'about-us', component: AboutUsComponent},
{"path": 'contact-us', component: ContactUsComponent},
{"path": 'user-profile', component: UserProfileComponent},


{"path":'medicines', children: [
  {"path":'', component:MedicinesComponent},
  {"path":'cart-list', component:CartListComponent},
  {"path":'wish-list', component:WishListComponent},
  {"path": 'checkout', component:CheckoutComponent},
  {"path": 'user-profile', component:UserProfileComponent},
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
