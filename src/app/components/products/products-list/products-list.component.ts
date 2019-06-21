import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  productsList: Product[];

  constructor(
    private producService: ProductService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    return this.producService.getProduts()
    .snapshotChanges()
    .subscribe( item => {
      this.productsList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.productsList.push( x as Product );
      });
    });
  }

  onEdit(product: Product) {
    // Object.assign({}, product); para que no haga two way y genere fallas de rendimiento
    //  this.producService.selectedtProduct = product;  si no deberia ser asi.
    this.producService.selectedtProduct = Object.assign({}, product);
  }

  onDelete($key: string) {
    if (confirm('Are you sure you want to delete it?')) {
      this.producService.deleteProduct($key);
      this.toastr.warning('Deleted Successfully', 'Product Removed');
    }
  }

}
