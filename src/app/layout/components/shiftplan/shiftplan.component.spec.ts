import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftplanComponent } from './shiftplan.component';

describe('ShiftplanComponent', () => {
  let component: ShiftplanComponent;
  let fixture: ComponentFixture<ShiftplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShiftplanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiftplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
