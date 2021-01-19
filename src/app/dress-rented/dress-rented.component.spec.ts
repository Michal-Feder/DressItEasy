import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DressRentedComponent } from './dress-rented.component';

describe('DressRentedComponent', () => {
  let component: DressRentedComponent;
  let fixture: ComponentFixture<DressRentedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DressRentedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DressRentedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
