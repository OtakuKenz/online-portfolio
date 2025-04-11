import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsAndCertificationsComponent } from './awards-and-certifications.component';

describe('AwardsAndCertificationsComponent', () => {
  let component: AwardsAndCertificationsComponent;
  let fixture: ComponentFixture<AwardsAndCertificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwardsAndCertificationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwardsAndCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
