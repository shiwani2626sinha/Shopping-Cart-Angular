import { Component, OnInit } from '@angular/core';

import {ProductService} from '../../../service/product.service';
import { Products } from 'src/app/models/products';


//this components depends on product services. 
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  productlist: Products[]=[];
  constructor(private productService : ProductService) // this is actually dependency injection 
   {
     
    }

  ngOnInit(): void {
    this.productlist= this.productService.getProducts();
  }

}
