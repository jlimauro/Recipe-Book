import { Ingrediant } from './ingrediant';

export class Recipe {
    constructor(public name, public description, public imagePath, public ingrediants: Ingrediant[]) {


    }
}
