import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// firebase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
// products
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductComponent } from './components/products/product/product.component';
// services
import { ProductService } from './services/product.service';
import { ProductsComponent } from './components/products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    ProductService // para reutilizarlo en todos los componentes
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
