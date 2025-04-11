import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorToDevelopmentComponent } from './prior-to-development.component';

describe('PriorToDevelopmentComponent', () => {
  let component: PriorToDevelopmentComponent;
  let fixture: ComponentFixture<PriorToDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriorToDevelopmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriorToDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
