import { Component, signal } from '@angular/core';
import { Job } from '../../../../interfaces/job.interface';
import jobs from './data/jobs.json'


@Component({
  selector: 'cv-work-experience',
  standalone: true,
  imports: [],
  templateUrl: './cv-work-experience.component.html',
  styleUrl: './cv-work-experience.component.css'
})
export class CvWorkExperienceComponent {

  public jobs = signal<Job[]>(jobs)

}
