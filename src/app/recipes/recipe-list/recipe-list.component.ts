import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  private igChangeSub: Subscription;


  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) {
  }


  ngOnInit() {
    // get data from service
    this.recipes = this.recipeService.getRecipes();
    console.log("materine receptz ");
    
    console.log(this.recipes);
    
    
    this.igChangeSub = this.recipeService.recipesChanged
        .subscribe(
            (recipes: Recipe[]) =>{
              console.log("Dostal som recepty mami 1 " + recipes.toString());
              console.log("Dostal som recepty mami 2" + recipes.map(value => console.log(value)
              ));

              this.recipes = recipes;

              /// potrebne call get from service because not real data api
            }
        );

  }

  onNewRecipe() {

    //navigation
    // add to url address after

    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {

//    this.igChangeSub.unsubscribe();
  }
}
