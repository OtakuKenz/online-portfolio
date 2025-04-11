import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { HomeComponent } from "../../home/home.component";
import { ExperienceAndEducationComponent } from "../../experience-and-education/experience-and-education.component";
import { AwardsAndCertificationsComponent } from "../../awards-and-certifications/awards-and-certifications.component";
import { ContactMeComponent } from "../../contact-me/contact-me.component";

@Component({
  selector: 'app-body',
  imports: [HomeComponent, ExperienceAndEducationComponent, AwardsAndCertificationsComponent, ContactMeComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  @ViewChildren('sections') sections!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    this.sections.forEach((section) => {
      observer.observe(section.nativeElement);
    });
  }
}
