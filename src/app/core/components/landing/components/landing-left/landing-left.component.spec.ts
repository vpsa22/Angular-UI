import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonService } from 'src/app/service/common.service';
import { RouterTestingModule } from '@angular/router/testing';
import { LandingLeftComponent } from './landing-left.component';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('LandingLeftComponent', () => {
  let component: LandingLeftComponent;
  let fixture: ComponentFixture<LandingLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingLeftComponent ],
      imports:[RouterTestingModule,HttpClientModule],
      providers:[CommonService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
