import { Component } from '@angular/core';
import { HeaderComponent } from "./cv-header/cv-header.component";
import { CvSkillsComponent } from "./cv-skills/cv-skills.component";
import { CvWorkExperienceComponent } from "./cv-work-experience/cv-work-experience.component";
import { CvEducationComponent } from "./cv-education/cv-education.component";
import { CvSoftSkillsComponent } from "./cv-soft-skills/cv-soft-skills.component";

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [HeaderComponent, CvSkillsComponent, CvWorkExperienceComponent, CvEducationComponent, CvSoftSkillsComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent {

}
