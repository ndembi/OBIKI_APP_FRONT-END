
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavigationAppComponent } from './navigation-app.component';

describe('NavigationAppComponent', () => {
  let component: NavigationAppComponent;
  let fixture: ComponentFixture<NavigationAppComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [NavigationAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
