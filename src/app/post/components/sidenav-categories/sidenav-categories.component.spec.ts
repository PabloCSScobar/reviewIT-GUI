import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavCategoriesComponent } from './sidenav-categories.component';

describe('SidenavCategoriesComponent', () => {
  let component: SidenavCategoriesComponent;
  let fixture: ComponentFixture<SidenavCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
