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
    },{
      Id:3,image:"https://www.makro.co.za/sys-master/images/h24/h7f/9378396405790/5efce484-70bf-4060-8e1a-ca3322508fe2-qpn13_medium",
      Name: "Toshiba hard drive",
      Price: "R3,677",
      Description: "Toshiba Canvio Advance-1TB-USB 3.0"

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
