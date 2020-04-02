import { Component, OnInit } from '@angular/core';
import { Numbers } from './numbers';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  pizzas:Numbers[] = [
    new Numbers('Barberque Chicken', 'Small, Medium, Large', 3),
    new Numbers('Pepperoni Steak', 'Small,Medium,Large', 2),
    new Numbers('Vegeterain Pizza', 'Medium, Large', 3)
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
