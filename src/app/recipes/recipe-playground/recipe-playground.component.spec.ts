import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipePlaygroundComponent } from './recipe-playground.component';

describe('RecipePlaygroundComponent', () => {
  let component: RecipePlaygroundComponent;
  let fixture: ComponentFixture<RecipePlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipePlaygroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipePlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
