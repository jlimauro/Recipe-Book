import { Component, OnInit } from '@angular/core';

import { Recipe } from '../shared/recipe'

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html',
  styles: []
})
export class RecipesComponent implements OnInit {

selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
