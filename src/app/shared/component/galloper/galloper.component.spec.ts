import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalloperComponent } from './galloper.component';

describe('GalloperComponent', () => {
  let component: GalloperComponent;
  let fixture: ComponentFixture<GalloperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalloperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
