import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ProductsService } from "../products.service";




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

   constructor(
    private router: Router,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
  }
  save(product) {
this.productsService.addProducts(product);
  this.router.navigate(['/products-list']);
  }

}