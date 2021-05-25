import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import { Router } from '@angular/router';
import { Product } from '../../models/product';

declare var $: any;
@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss']
})
export class SearchProductComponent implements OnInit {
  products:Product[];


  constructor(
    private router:Router,
    private productService:ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response;
      console.log(this.products)
    }, e => {
        
      console.log(`The error: `, e);
      
    });
  }

  searchProduct(search) {
    //console.log(search.target.value);
    this.productService.SearchProduct({"search" :search.target.value}).subscribe((response) => {
      this.products = response;
      console.log(this.products)
    }, e => {
        
      console.log(`The error: `, e);
      
    });
  }

  editar(id:number) {
    $('#Modal' + id).modal({show:true});
  }

  getProductsReload(id:number) {
    if(id) {
      this.getProducts();
      $('#Modal' + id).modal('hide');
    }
  }

  deleteProduct(id:number) {
   
    this.productService.deleteProducts(id).subscribe((response) => {
      alert('Eliminado con exito');
      this.getProducts();
    }, e => {
        
      console.log(`The error: `, e);
      
    });
      
  }
}
