import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { CartitemComponent } from './cartitem/cartitem.component';
import {AddtocartService} from '../../../service/addtocart.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
 
  /*cartItem =[
   // {productid: 1 ,qty: 5, price: 100, productname: 'Test1'},
    //{productid: 2 ,qty: 4, price: 105,productname: 'Test2'},
   // {productid: 3 ,qty: 3, price: 150, productname: 'Test3'},
    //{productid: 4 ,qty: 2, price: 200, productname: 'Test4'},

  ];
*/
cartItem =[];
  cartTotal = 0;


  constructor(private msg : AddtocartService) { }

  ngOnInit(): void {
    this.msg.getMsg().subscribe((product: Products) =>{
     
     this.addProductToCart(product)
    })
  }

  addProductToCart(product: Products){
    let productExists = false
    for(let i in this.cartItem){
      if(this.cartItem[i].id === product.id)  {
        this.cartItem[i].qty++
        productExists = true
         break;

       }}
       if(!productExists){
        this.cartItem.push({
          name: product.name,
          qty: 1,
          price: product.price,
          id: product.id
        })
       }
   
     this.cartTotal=0;
    //once everything is loaded
    this.cartItem.forEach(item =>{
    this.cartTotal = this.cartTotal+  (item.qty * item.price)
  })
  }
  
  
}
