import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonService } from 'src/app/service/common.service';
import { RouterTestingModule } from '@angular/router/testing';
import { LandingRightComponent } from './landing-right.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('LandingRightComponent', () => {
  let component: LandingRightComponent;
  let fixture: ComponentFixture<LandingRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingRightComponent ],
      imports:[RouterTestingModule],
      providers:[CommonService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
