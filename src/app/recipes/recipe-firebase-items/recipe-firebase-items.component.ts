import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import {FirebaseService} from '../firebase.service';
import Tutorial from '../models/tutorial.module';

@Component({
  selector: 'app-recipe-firebase-items',
  templateUrl: './recipe-firebase-items.component.html',
  styleUrls: ['./recipe-firebase-items.component.css']
})
export class RecipeFirebaseItemsComponent implements OnInit {

  ///tutorials-list.component.ts
  tutorials?: Tutorial[];
  currentTutorial?: Tutorial;
  currentIndex = -1;
  title = '';
  constructor (private tutorialService: FirebaseService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }


  refreshList(): void {
    this.currentTutorial = undefined;
    this.currentIndex = -1;
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.tutorialService.getAll().snapshotChanges().pipe(
        map(changes =>
            changes.map(c =>
                ({ key: c.payload.key, ...c.payload.val() })
            )
        )
    ).subscribe(data => {
      this.tutorials = data;
    });

  }


  // vybranie polozky v zozname po kliknuty
  setActiveTutorial(tutorial: Tutorial, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.tutorialService.deleteAll()
        .then(() => this.refreshList())
        .catch(err => console.log(err));
  }


}
