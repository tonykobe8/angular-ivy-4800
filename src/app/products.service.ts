import { Injectable } from "@angular/core";
import { Products } from "./products";

@Injectable()
export class ProductsService {
  selectedproduct: Products;

  products: Products[] = [
    {
      Id: 1,
      image:
        "https://stackblitz.com/files/angular-ivy-pxmohb/github/tonykobe8/angular-ivy-pxmohb/master/s-zoom.file",
      Name: "Portable monitor",
      Price: "R2,699",
      Description: "Asus MB168B 15.6"
    },
    {
      Id: 2,
      image:
        "https://stackblitz.com/files/angular-ivy-pxmohb/github/tonykobe8/angular-ivy-pxmohb/master/8806087691450_3-zoom.jpg",
      Name: "Curved monitor",
      Price: "R3,677",
      Description: "LG 25UM58-P Ultra Wild HD"
    }
  ];

  getAllProducts() {
    return this.products;
  }
  constructor() {}
 addProducts(prod:Products){
 prod.Id = this.products.length + 1;
     this.products.push(prod);
 }
}
