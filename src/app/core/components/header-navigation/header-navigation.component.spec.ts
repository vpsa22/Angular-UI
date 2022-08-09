import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonService } from 'src/app/service/common.service';

import { HeaderNavigationComponent } from './header-navigation.component';

describe('HeaderNavigationComponent', () => {
  let component: HeaderNavigationComponent;
  let fixture: ComponentFixture<HeaderNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ HeaderNavigationComponent ],
      providers:[CommonService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
