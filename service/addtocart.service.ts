import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddtocartService {

  subject = new Subject();
  constructor() { }

  sendMsg(product){
    
    this.subject.next(product) // Trigggering an event from productitem componnet
  }
  getMsg(){
    return this.subject.asObservable()
  }
}
