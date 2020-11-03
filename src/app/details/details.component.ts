import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
product: any;

  constructor(private router: ActivatedRoute,private productsService: ProductsService ){ }
 get products() {
    return this.productsService.getAllProducts();
  }
  
  ngOnInit() {
       this.router.paramMap.subscribe(params => {
         this.product = this.products[+params.get('productId')];
    });
  }

}