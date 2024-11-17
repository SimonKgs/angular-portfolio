import { Component, signal } from '@angular/core';

@Component({
  selector: 'cv-soft-skills',
  imports: [],
  templateUrl: './cv-soft-skills.component.html',
  styleUrl: './cv-soft-skills.component.css'
})
export class CvSoftSkillsComponent {

  public softSkills = signal([
    "English (Upper Intermediate)",
    "Problem Solving",
    "Adaptability",
    "Critical Thinking",
    "Team Collaboration",
    "Creativity",
    "Decision-Making"
  ])

}
