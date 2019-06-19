import { Injectable } from '@angular/core';
import { Product } from './../models/product';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  producList: AngularFireList<any>;
  sletectProduct: Product = new Product();

  constructor( private firebase: AngularFireDatabase) { }

  getProduts() {
    this.producList =  this.firebase.list('products');
  }

  insertProduct(product: Product) {
    this.producList.push({
      name: product.name,
      category: product.category,
      location: product.location,
      price: product.price
     });
  }

  updateProduct(product: Product) {
    this.producList.update(product.$key, {
      name: product.name,
      category: product.category,
      location: product.location,
      price: product.price
    });
  }

  deleteProduct($key: string) {
    this.producList.remove($key);
  }

}
