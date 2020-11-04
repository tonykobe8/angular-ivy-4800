import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductsService } from "../products.service";

@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.css"]
})
export class ProductsListComponent implements OnInit {
  constructor(
    private router: Router,
    private productsService: ProductsService
  ) {}
  get products() {
    return this.productsService.getAllProducts();
  }

  delete(index) {
    this.products.splice(index, 1);
  }
edit(i){
  console.log('sfddgf');
}
  ngOnInit() {}

  viewProduct(selectedProduct) {
    // console.log(selectedProduct);
    this.productsService.selectedproduct = selectedProduct;
    this.router.navigateByUrl("/details");
  }
}
