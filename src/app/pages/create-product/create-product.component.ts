import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ProductService} from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  public productForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private productService:ProductService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      nombre: [ '', Validators.required ],
      categoria: [ '', Validators.required ],
      precio: [ '', Validators.required ],
      inventario: [ '', Validators.required ]
    });
  }

  submit() {
    const formValue = this.productForm.value;
    if (this.productForm.valid) {
      this.productService.saveProduct(formValue).subscribe((response) => {
        alert('Guardado con exito')
        this.router.navigate(['search-product']);
      }, e => {
          
        console.log(`The error: `, e);
        
      });
    }else {
      alert('Faltan datos');
    }
  }

}
