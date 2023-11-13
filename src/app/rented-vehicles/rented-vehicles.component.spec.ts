import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentedVehiclesComponent } from './rented-vehicles.component';

describe('RentedVehiclesComponent', () => {
  let component: RentedVehiclesComponent;
  let fixture: ComponentFixture<RentedVehiclesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentedVehiclesComponent]
    });
    fixture = TestBed.createComponent(RentedVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
