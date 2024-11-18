import { Component, signal } from '@angular/core';
import { HeroComponent } from "../../shared/hero/hero.component";
import projects from './data/projects.json'
import { ProjectInterface, Technology } from '../../interfaces/project.interface';
import { ProjectComponent } from "./project/project.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [HeroComponent, ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export default class ProjectsComponent {

  // I need to cast the values from the enum as an array of Technologies
  private TECHNOLOGIES = Object.values(Technology) as Technology[];

  public projects = signal<ProjectInterface[]>(
    projects.map((project) => ({
      ...project,
      startDate: new Date(project.startDate),
      endDate: project.endDate ? new Date(project.endDate) : undefined,
      // to make the technolgies from the data fit the interface and type
      technologies: project.technologies.filter((tech): tech is Technology => {
        return this.TECHNOLOGIES.includes(tech as Technology);
      }) as Technology[],
      description: project.description.length > 300 ? project.description.substring(0, 300) + '...' : project.description
    }))
  );
}
