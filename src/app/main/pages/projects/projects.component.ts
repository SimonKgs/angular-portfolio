import { Component, signal } from '@angular/core';
import { HeroComponent } from "../../shared/hero/hero.component";
import projects from './data/projects.json'
import { ProjectInterface, Technology } from '../../interfaces/project.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export default class ProjectsComponent {

  public projects = signal<ProjectInterface[]>(
    projects.map((project) => ({
      ...project,
      startDate: new Date(project.startDate),
      endDate: project["endDate?"] ? new Date(project["endDate?"]) : undefined,
      // to make the technolgies from the data fit the interface and type
      // basicall
      technologies: project.technologies.filter((tech): tech is Technology => {
        return ['Java', 'TypeScript', 'JavaScript', 'NodeJS', 'React', 'Angular', 
                'Express', 'HTML', 'CSS', 'MySQL', 'MongoDB', 'Python', 
                'Flask', 'Django'].includes(tech);
      }) as Technology[],
      description: project.description.length > 300 ? project.description.substring(0, 300) + '...' : project.description
    }))
  );
}
