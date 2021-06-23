import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../recipes/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{

  constructor( private recipeService: RecipeService) {
  }

  onSaveData() {
    console.log("call On save data ");
    
 //   this.recipeService.storeRecipes();
  }

  ngOnInit(): void {
  }
}
