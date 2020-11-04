import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../products.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  product: any;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.product = this.productsService.selectedproduct;
    console.log(this.product);
  }
}
