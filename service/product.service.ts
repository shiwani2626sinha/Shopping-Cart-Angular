import { Injectable } from '@angular/core';
import {Products} from '../models/products'; 
import {productUrl} from '../../config/api';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//for non api integration
//const apiUrl = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
/* non api integration
  products: Products[]=[
    new Products(1, 'Product1', 'This is Product 1 description',100),
    new Products(2, 'Product2', 'This is Product 2 description',200),
    new Products(3, 'Product3', 'This is Product 3 description',300),
    new Products(4, 'Product4', 'This is Product 4 description',400),
    new Products(5, 'Product5', 'This is Product 5 description',500),
    new Products(6, 'Product6', 'This is Product 6 description',600),
    new Products(7, 'Product7', 'This is Product 7 description',700),
    ]*/

  constructor(private http: HttpClient) { }
  //non api integration
 /* getProducts() : Products[]{ // return type product array
        return this.products; // the local array
  }*/

// api integration
getProducts() : Observable<Products[]>{ // returns an observable of data type 
  return this.http.get<Products[]>(productUrl);
}

}
