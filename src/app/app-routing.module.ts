import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';

const appRoutes:Routes = [
 
  {path:'login' ,component:LoginComponent },
  { path:'register',component:RegisterComponent},
  {path:'products-list' ,component:ProductsListComponent},
 {path:'products' ,component:ProductsComponent},{
   path:'details',component:DetailsComponent 
 }
 
]

@NgModule({
  imports:[ RouterModule.forRoot(appRoutes)],
exports:[RouterModule],
  declarations: [ ],
  bootstrap:    [ ]
})
export class AppRoutingModule { }
