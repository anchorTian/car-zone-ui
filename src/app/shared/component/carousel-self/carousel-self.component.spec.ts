import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselSelfComponent } from './carousel-self.component';

describe('CarouselSelfComponent', () => {
  let component: CarouselSelfComponent;
  let fixture: ComponentFixture<CarouselSelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselSelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
