import { Component, input } from '@angular/core';
import { ProjectInterface } from '../../../interfaces/project.interface';

@Component({
  selector: 'project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  
  public project = input.required<ProjectInterface>()

}
