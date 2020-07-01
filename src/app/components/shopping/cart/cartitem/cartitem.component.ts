import { Component, OnInit, Input } from '@angular/core';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.scss']
})
export class CartitemComponent implements OnInit {
  
  @Input() cartItem: any;
  constructor() { }

  ngOnInit(): void {
  }

}
