import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosPComponent } from './otros-p.component';

describe('OtrosPComponent', () => {
  let component: OtrosPComponent;
  let fixture: ComponentFixture<OtrosPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtrosPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtrosPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
