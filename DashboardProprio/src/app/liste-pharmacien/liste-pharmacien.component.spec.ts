import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePharmacienComponent } from './liste-pharmacien.component';

describe('ListePharmacienComponent', () => {
  let component: ListePharmacienComponent;
  let fixture: ComponentFixture<ListePharmacienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListePharmacienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePharmacienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
