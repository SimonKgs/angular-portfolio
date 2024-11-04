import { Component } from '@angular/core';
import { HeaderComponent } from "./cv-header/cv-header.component";
import { CvSkillsComponent } from "./cv-skills/cv-skills.component";
import { CvWorkExperienceComponent } from "./cv-work-experience/cv-work-experience.component";

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [HeaderComponent, CvSkillsComponent, CvWorkExperienceComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent {

}
