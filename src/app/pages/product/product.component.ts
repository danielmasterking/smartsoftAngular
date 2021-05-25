import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import { Router } from '@angular/router';
import { Product } from '../../models/product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
 
  countProduct:number;
  constructor(
    private router:Router,
    private productService:ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.countProduct = response.length;
      console.log('conteo' + this.countProduct)
    }, e => {
        
      console.log(`The error: `, e);
      
    });
  }

}
