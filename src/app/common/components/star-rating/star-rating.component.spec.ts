import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { StarRatingComponent } from './star-rating.component';

xdescribe('StarRatingComponent', () => {
  let component: StarRatingComponent;
  let fixture: ComponentFixture<StarRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarRatingComponent ],
      imports:[RouterTestingModule ], //MatSnackBarModule, MatSnackBar,
      //providers: [ MatSnackBarModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
