import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import {MatInputModule} from '@angular/material/input';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { ProductsListComponent } from 
'./products-list/products-list.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ProductsService } from './products.service';

@NgModule({
  imports:      [ RouterModule,BrowserModule,BrowserAnimationsModule,MatFormFieldModule, FormsModule , AppRoutingModule,MatInputModule,MatGridListModule],
  declarations: [ AppComponent, HelloComponent, ProductsListComponent, ProductsComponent, RegisterComponent, LoginComponent, MainComponent],
  bootstrap:    [ AppComponent ],
  providers: [ProductsService]
})
export class AppModule { }
