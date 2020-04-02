import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  alertOnDelete(message){
    alert (message);
  }
}
