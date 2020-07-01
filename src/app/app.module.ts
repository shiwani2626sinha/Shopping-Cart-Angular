import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { FiltersComponent } from './components/shopping/filters/filters.component';
import { ProductlistComponent } from './components/shopping/productlist/productlist.component';
import { CartComponent } from './components/shopping/cart/cart.component';
import { CartitemComponent } from './components/shopping/cart/cartitem/cartitem.component';
import { ProductitemComponent } from './components/shopping/productlist/productitem/productitem.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingComponent,
    FiltersComponent,
    ProductlistComponent,
    CartComponent,
    CartitemComponent,
    ProductitemComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
