import { Component, OnInit , Input , Output, EventEmitter} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ProductService} from '../../../services/product.service';
import { Router } from '@angular/router';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {
  public productForm: FormGroup;
  product:Product[] ;
  @Input() idProduct:number;

  @Output()
  RecargarDatos = new EventEmitter<number>();

  constructor(
    private fb: FormBuilder,
    private productService:ProductService,
    private router:Router
  ) { }

  ngOnInit(): void {
    
    this.getProductId();
    

    this.productForm = this.fb.group({
      nombre: [ '' , Validators.required ],
      categoria: [ '', Validators.required ],
      precio: [ '', Validators.required ],
      inventario: [ '', Validators.required ]
    });
  }

  submit(){
    const formValue = this.productForm.value;
    if (this.productForm.valid) {
      this.productService.UpdateProduct(formValue, this.idProduct).subscribe((response) => {
        alert('Guardado con exito')
        this.RecargarDatos.emit(this.idProduct);
      }, e => {
          
        console.log(`The error: `, e);
        
      });
    }else {
      alert('Faltan datos');
    }
  }

  getProductId() {
    this.productService.getProductId(this.idProduct).subscribe((response) => {
      this.product = response;
     
      this.productForm.get('nombre').setValue(this.product['nombre'])
      this.productForm.get('categoria').setValue(this.product['categoria'])
      this.productForm.get('precio').setValue(this.product['precio'])
      this.productForm.get('inventario').setValue(this.product['inventario'])

     
      console.log('los prod')
      console.log(this.product)
    }, e => {
        
      console.log(`The error: `, e);
      
    });
  }


}
