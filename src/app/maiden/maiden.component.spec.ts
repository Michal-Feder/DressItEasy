import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaidenComponent } from './maiden.component';

describe('MaidenComponent', () => {
  let component: MaidenComponent;
  let fixture: ComponentFixture<MaidenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaidenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaidenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
