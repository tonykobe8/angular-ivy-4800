import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ProductsService } from "../products.service";
import { Products } from "../products";



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 selectedFile: Products ;
   constructor(
    private router: Router,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
  }
   processFile(imageInput: any) {
     
  }

  save(product) {
this.productsService.addProducts(product);
  this.router.navigate(['/products-list']);
  }

}