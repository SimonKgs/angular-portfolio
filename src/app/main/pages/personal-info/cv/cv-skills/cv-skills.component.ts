import { Component, signal } from '@angular/core';
import { CvSkillComponent } from "./cv-skill/cv-skill.component";
import { Skill, } from '../../../../interfaces/skill.interface';
import skills from './data/skills.json'



@Component({
  selector: 'cv-skills',
  standalone: true,
  imports: [CvSkillComponent],
  templateUrl: './cv-skills.component.html',
  styleUrl: './cv-skills.component.css'
})
export class CvSkillsComponent {

  public skills = signal<Skill[]>(skills)
}
