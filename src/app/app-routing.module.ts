import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import {RecipePlaygroundComponent} from './recipes/recipe-playground/recipe-playground.component';
import {RecipeFirebaseItemsComponent} from './recipes/recipe-firebase-items/recipe-firebase-items.component';
import {AuthComponent} from './auth/auth.component';
import {VerifyEmailComponent} from './verify-email/verify-email.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'login', component: AuthComponent},
  { path: 'add-tutorial', component: RecipePlaygroundComponent},
  { path: 'items', component: RecipeFirebaseItemsComponent},
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent },
  ] },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'email-verification', component: VerifyEmailComponent },
  { path: 'dashboard', component: DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
