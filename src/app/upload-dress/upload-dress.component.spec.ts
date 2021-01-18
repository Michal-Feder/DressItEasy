import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDressComponent } from './upload-dress.component';

describe('UploadDressComponent', () => {
  let component: UploadDressComponent;
  let fixture: ComponentFixture<UploadDressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadDressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadDressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
