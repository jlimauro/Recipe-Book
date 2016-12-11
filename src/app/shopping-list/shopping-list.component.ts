import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../shared/Ingrediant';
@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {

item: Ingrediant[] = [];

  constructor() { }

  ngOnInit() {
  }

}
