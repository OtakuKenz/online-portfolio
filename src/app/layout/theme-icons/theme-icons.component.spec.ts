import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeIconsComponent } from './theme-icons.component';

describe('ThemeIconsComponent', () => {
  let component: ThemeIconsComponent;
  let fixture: ComponentFixture<ThemeIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeIconsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
