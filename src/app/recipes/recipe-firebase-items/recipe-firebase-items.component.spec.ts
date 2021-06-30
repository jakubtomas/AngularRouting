import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeFirebaseItemsComponent } from './recipe-firebase-items.component';

describe('RecipeFirebaseItemsComponent', () => {
  let component: RecipeFirebaseItemsComponent;
  let fixture: ComponentFixture<RecipeFirebaseItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeFirebaseItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeFirebaseItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
