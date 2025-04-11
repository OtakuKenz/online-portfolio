import { Component } from '@angular/core';
import { PriorToDevelopmentComponent } from "./prior-to-development/prior-to-development.component";
import { AsDeveloperComponent } from "./as-developer/as-developer.component";

@Component({
  selector: 'app-experience-and-education',
  imports: [PriorToDevelopmentComponent, AsDeveloperComponent],
  templateUrl: './experience-and-education.component.html',
  styleUrl: './experience-and-education.component.scss'
})
export class ExperienceAndEducationComponent {

}
