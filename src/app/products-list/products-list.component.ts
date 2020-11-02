import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor(private router: Router,private productsService: ProductsService ){ }
 get products() {
    return this.productsService.getAllProducts();
  }
  delete(id: number) {
    const emp = this.products.findIndex(c => c.Id == id);
     if (emp >-1) {
    this.products.splice(emp,1);

  }
  }

  ngOnInit() {
  }

}