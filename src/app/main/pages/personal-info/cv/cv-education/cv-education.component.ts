import { Component, signal } from '@angular/core';
import education from './data/education.json'
import { Education } from '../../../../interfaces/education.interface';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'cv-education',
  imports: [RouterModule],
  templateUrl: './cv-education.component.html',
  styleUrl: './cv-education.component.css'
})
export class CvEducationComponent {

  public education = signal<Education[]>(education)

}
