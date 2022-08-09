import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonService } from 'src/app/service/common.service';

import { CreatorSignupLoginComponent } from './creator-signup-login.component';

describe('CreatorSignupLoginComponent', () => {
  let component: CreatorSignupLoginComponent;
  let fixture: ComponentFixture<CreatorSignupLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorSignupLoginComponent ],
      providers:[CommonService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorSignupLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
