import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonService } from 'src/app/service/common.service';

import { CompanySignupLoginComponent } from './company-signup-login.component';

describe('CompanySignupLoginComponent', () => {
  let component: CompanySignupLoginComponent;
  let fixture: ComponentFixture<CompanySignupLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanySignupLoginComponent ],
      imports:[RouterTestingModule],
      providers:[CommonService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySignupLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
