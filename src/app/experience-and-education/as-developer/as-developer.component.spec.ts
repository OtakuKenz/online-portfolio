import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsDeveloperComponent } from './as-developer.component';

describe('AsDeveloperComponent', () => {
  let component: AsDeveloperComponent;
  let fixture: ComponentFixture<AsDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsDeveloperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
