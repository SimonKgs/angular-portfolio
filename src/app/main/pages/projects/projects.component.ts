import { Component } from '@angular/core';
import { HeroComponent } from "../../shared/hero/hero.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export default class ProjectsComponent {

}
