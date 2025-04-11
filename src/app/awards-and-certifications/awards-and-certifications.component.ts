import { Component, ElementRef, ViewChild } from '@angular/core';
import { AwardsComponent } from "./awards/awards.component";
import { CertificationsComponent } from "./certifications/certifications.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-awards-and-certifications',
  imports: [CommonModule, AwardsComponent, CertificationsComponent],
  templateUrl: './awards-and-certifications.component.html',
  styleUrl: './awards-and-certifications.component.scss'
})
export class AwardsAndCertificationsComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  showScrollDown: boolean = true;

  // Listen for scroll events
  onScroll(event: Event): void {
    const element = this.scrollContainer.nativeElement;
    this.showScrollDown = element.scrollHeight > element.scrollTop + element.clientHeight;
  }
}
