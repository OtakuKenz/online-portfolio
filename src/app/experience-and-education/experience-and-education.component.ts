import { Component } from '@angular/core';
import { PriorToDevelopmentComponent } from "./prior-to-development/prior-to-development.component";
import { AsDeveloperComponent } from "./as-developer/as-developer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience-and-education',
  imports: [CommonModule, PriorToDevelopmentComponent, AsDeveloperComponent],
  templateUrl: './experience-and-education.component.html',
  styleUrl: './experience-and-education.component.scss'
})
export class ExperienceAndEducationComponent {
  expandedSections: { [key: string]: boolean } = {
    priorToDevelopment: true,
    asDeveloper: true
  };

  isExpanded(sectionId: string): boolean {
    return this.expandedSections[sectionId];
  }

  toggleSection(sectionId: string): void {
    this.expandedSections[sectionId] = !this.expandedSections[sectionId];
  }
}
