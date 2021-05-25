import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  saveProduct(data:Product){
    let url:string = `${environment.ApiUrl}/products`
    return this.http.post(url, data , this.getHeaders());
  }

  UpdateProduct(data:Product , id:number){
    let url:string = `${environment.ApiUrl}/products/${id}`
    return this.http.put(url, data , this.getHeaders());
  }

  getProducts() {
    let url:string = `${environment.ApiUrl}/products`
    return this.http.get<Product[]>(url, this.getHeaders());
  }

  deleteProducts(id:number) {
    let url:string = `${environment.ApiUrl}/products/${id}`
    return this.http.delete(url, this.getHeaders());
  }

  getProductId(id:number) {
    let url:string = `${environment.ApiUrl}/products/${id}`
    return this.http.get<Product[]>(url, this.getHeaders());
  }

  SearchProduct(search:object) {
    let url:string = `${environment.ApiUrl}/products/search`
    return this.http.post<Product[]>(url,search ,this.getHeaders());
  }

  private getHeaders(): Object {
    const headers = new HttpHeaders()
    .set(
      'token',
      localStorage.getItem('token')
    );
    const httpOptions = {
      headers
    };

    return httpOptions;
  }
}
