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
}
