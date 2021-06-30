import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../recipe.service';
import {FirebaseService} from '../firebase.service';
import Tutorial from '../models/tutorial.module';

@Component({
    selector: 'app-recipe-playground',
    templateUrl: './recipe-playground.component.html',
    styleUrls: ['./recipe-playground.component.css']
})
export class RecipePlaygroundComponent implements OnInit {


    tutorial: Tutorial = new Tutorial();
    submitted = false;

    coffees = ['Americano', 'Flat White', 'Cappuccino', 'Latte', 'Espresso', 'Machiato', 'Mocha', 'Hot Chocolate', 'Tea'];

    coffeeOrder = [];
    addCoffee = coffee => this.coffeeOrder.push(coffee);
    removeCoffee = coffee => {
        let index = this.coffeeOrder.indexOf(coffee);
        if (index > -1) {
            this.coffeeOrder.splice(index, 1);
        }
    };

    constructor(public  recipeService: RecipeService,
                private tutorialService: FirebaseService) {
    }

    ngOnInit(): void {
    }


    onSubmit() {
        this.recipeService.form.value.coffeeOrder = this.coffeeOrder;
        let data = this.recipeService.form.value;

        this.recipeService.createCoffeeOrder(data)
            .then(res => {
                /*do something here....
                maybe clear the form or give a success message*/
            });
    }

//Firebase Tutorial
///add-tutorial.component.ts

    saveTutorial(): void {
        this.tutorialService.create(this.tutorial).then(() => {
            console.log('Created new item successfully!');
            this.submitted = true;
        });
    }

    newTutorial(): void {
        this.submitted = false;
        this.tutorial = new Tutorial();
    }


}
