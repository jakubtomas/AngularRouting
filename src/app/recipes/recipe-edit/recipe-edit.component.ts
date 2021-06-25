import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Params} from '@angular/router';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import {RecipeService} from '../recipe.service';

@Component({
    selector: 'app-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
    id: number;
    editMode = false;
    recipeInstance;

 //   private Recipe = new Recipe('', '', '', []);
    private Ingredient = new Ingredient('Apple', 2);


    @ViewChild('f', {static: false}) signupForm: NgForm;

    user = {
        username: '',
        email: '',
        secretQuestion: '',
        answer: '',
        gender: ''
    };

    recipe = {
        name: '',
        description: '',
        imagePath: '',
        ingredients: []
    };


    submitted = false;


    constructor(private route: ActivatedRoute,
                private recipeService: RecipeService) {
    }

    ngOnInit() {

        this.route.params
            .subscribe(
                (params: Params) => {
                    console.log('Parameter  ' + params['id']);

                    this.id = +params['id'];
                    this.editMode = params['id'] != null;
                }
            );
    }


    onSubmit() {
        console.log(this.signupForm);
        //priradenie hodnot
        this.submitted = true;
        // this.user.username = this.signupForm.value.userData.username;


        this.user.email = this.signupForm.value.userData.email;
        this.user.secretQuestion = this.signupForm.value.secret;
        this.user.answer = this.signupForm.value.questionAnswer;
        this.user.gender = this.signupForm.value.gender;
        this.recipe.name = this.signupForm.value.userData.name;
        this.recipe.description = this.signupForm.value.userData.description;
        this.recipe.imagePath = this.signupForm.value.userData.imagePath;
        //  this.recipe.imagePath= this.signupForm.value.userData.imagePath;

       /* this.recipeInstance = new Recipe(this.signupForm.value.name,
            this.signupForm.value.desribtion,
            this.signupForm.value.userData, [
                new Ingredient('Apple ', 2),
                new Ingredient('Banana', 1)
            ]);*/

        this.recipeInstance = new Recipe("Hello",
            "Mandarinak",
            "recipes", [
                new Ingredient('Apple ', 2),
                new Ingredient('Banana', 1)
            ]);



        this.recipeService.addRecipe(this.recipeInstance);
    }

}
