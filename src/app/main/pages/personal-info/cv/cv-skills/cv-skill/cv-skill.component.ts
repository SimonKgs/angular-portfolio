import { Component, input } from '@angular/core';
import { Skill } from '../../../../../interfaces/skill.interface';

@Component({
  selector: 'cv-skill',
  standalone: true,
  imports: [],
  templateUrl: './cv-skill.component.html',
  styleUrl: './cv-skill.component.css'
})
export class CvSkillComponent {

  public skill = input.required<Skill>()

}
