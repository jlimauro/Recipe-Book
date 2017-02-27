import { Injectable } from '@angular/core';
import { Recipe } from '../shared/recipe';
import { Ingredient } from '../shared/ingredient';


@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
      new Recipe("Schnitzel", "Very Tasty", "http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg", 
      [ new Ingredient('French Fries',2), new Ingredient('Pork Meat', 1) ]),
      new Recipe("Pizza", "Awesome", "http://www.989wolf.com/wp-content/uploads/2016/05/maxresdefault-1.jpg", 
      [ new Ingredient('Dough',1), new Ingredient('Tomato Sauce', 1) ])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}
