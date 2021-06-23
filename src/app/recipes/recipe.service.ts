import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
        'Tasty Schnitzel',
        'A super-tasty Schnitzel - just awesome!',
        'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
        [
          new Ingredient('Meat', 1),
          new Ingredient('French Fries', 20)
        ]),
    new Recipe('Big Fat Burger',
        'What else you need to say?',
        'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
        [
          new Ingredient('Buns', 2),
          new Ingredient('Meat', 1)
        ])
  ];

  constructor(private slService: ShoppingListService,
              private http: HttpClient) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    console.log('DLZKA PRED ' + this.recipes.length);
    this.recipes.push(recipe);

    console.log('recept po pridanz');
    console.log(this.recipes);

    this.recipesChanged.next(this.recipes.slice());

    console.log(' DLZKA po' + this.recipes.length);
  }

  //    this.ingredients.push(...ingredients);

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  sayHelloWorld() {
    console.log("function Hello world");

  }


  storeRecipes() {
    //const recipes = this.recipeService.getRecipes();
    /*
    console.log("call store recipes ");
    
    this.http
        .put(
            'https://food-f6ad5-default-rtdb.europe-west1.firebasedatabase.app/',
            this.recipes
        )
        .subscribe(response => {
          console.log(response);
        });*/
  }


}
