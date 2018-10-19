import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfacePharmacienComponent } from './interface-pharmacien.component';

describe('InterfacePharmacienComponent', () => {
  let component: InterfacePharmacienComponent;
  let fixture: ComponentFixture<InterfacePharmacienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfacePharmacienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfacePharmacienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
