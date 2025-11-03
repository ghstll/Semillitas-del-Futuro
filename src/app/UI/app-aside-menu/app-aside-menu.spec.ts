import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAsideMenu } from './app-aside-menu';

describe('AppAsideMenu', () => {
  let component: AppAsideMenu;
  let fixture: ComponentFixture<AppAsideMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppAsideMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppAsideMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
