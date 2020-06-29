import { Component, OnInit, Input } from '@angular/core';
import {Products} from '../../../../models/products';
import {AddtocartService} from '../../../../service/addtocart.service';
@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.scss']
})
export class ProductitemComponent implements OnInit {

  @Input() productItem: Products; // this is coming from the parent component so well use input decorator

  constructor(private msg: AddtocartService) { }

  ngOnInit(): void {
  }

  handleAddToCart(){
    this.msg.sendMsg(this.productItem)
  }

}
