import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesCardComponent } from './recipe-card.component';

describe('RecipesCardComponent', () => {
  let component: RecipesCardComponent;
  let fixture: ComponentFixture<RecipesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
