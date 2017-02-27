import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from "../../shared/recipe";
import {ShoppingListService} from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: []
})
export class RecipeDetailComponent implements OnInit {

@Input() selectedRecipe: Recipe;

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    console.log("button pressed");
    this.sls.addItems(this.selectedRecipe.ingrediants);
  }

}
