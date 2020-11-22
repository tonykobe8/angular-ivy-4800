import { Injectable } from "@angular/core";
import { Products } from "./products";

@Injectable()
export class ProductsService {
  selectedproduct: Products;

  products: Products[] = [
    {Id:0 ,image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTBuxm6Y-s7alppMXyuBq_VCicyX6cFrDXhTFUrKnTh8Er0TOnH2EzJIx2NqlIjSbm5Vjhe8nFbwZ0X&usqp=CAc",
    Name: "Surface Go",
      Price: "R8,699",
      Description: "Surface Go2 P/4/64GB"},
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
