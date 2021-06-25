import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import {HttpClientModule} from '@angular/common/http';
import {RecipeService} from './recipes/recipe.service';

import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { RecipePlaygroundComponent } from './recipes/recipe-playground/recipe-playground.component';
import { ReactiveFormsModule } from "@angular/forms";
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {FirebaseService} from './recipes/firebase.service';
import { RecipeFirebaseItemsComponent } from './recipes/recipe-firebase-items/recipe-firebase-items.component';
import { TutorialDetailsComponent } from './recipes/recipe-firebase-items/tutorial-details/tutorial-details.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    RecipePlaygroundComponent,
    RecipeFirebaseItemsComponent,
    TutorialDetailsComponent,

  ],
  imports: [
      ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
  ],
  providers: [ShoppingListService,RecipeService,FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
