import { Component, OnInit, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from './../../../services/product.service';
import { Product } from 'src/app/models/product';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private toastr: ToastrService
  ) { }

  resetForm(productForm?: NgForm) {
    if (productForm != null) {
      productForm.reset();
      this.productService.selectedtProduct = new Product();
    }
  }

  addProduct(productForm: NgForm) {
    this.productService.insertProduct(productForm.value);
    this.toastr.success('Agregado', 'APP');
  }

  onSubmit(productForm: NgForm) {
    if (!productForm.value.$key) {
      this.productService.insertProduct(productForm.value);
      this.toastr.success('Agregado', 'APP');
    } else {
      this.productService.updateProduct(productForm.value);
      this.toastr.success('Modificado', 'APP');
    }
    this.resetForm(productForm);
  }

  ngOnInit() {
    this.productService.getProduts();
    this.resetForm();
  }

}
