import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFavourComponent } from './my-favour.component';

describe('MyFavourComponent', () => {
  let component: MyFavourComponent;
  let fixture: ComponentFixture<MyFavourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFavourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFavourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
